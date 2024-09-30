import { placeholder, Decoration, ViewPlugin } from "@codemirror/view";
import { indentationMarkers } from "@replit/codemirror-indentation-markers";
import { showMinimap } from "@replit/codemirror-minimap";
import { inlineSuggestion } from "codemirror-extension-inline-suggestion";
import { basicSetup } from "../codemirror/basicSetup";
import { hyperLink } from "@uiw/codemirror-extensions-hyper-link";
import { ilumictheme } from "./ilumictheme";

const bracketPairColorizationPlugin = ViewPlugin.fromClass(
  class {
    decorations;

    constructor(view) {
      this.decorations = this.getBracketDecorations(view);
    }

    update(update) {
      if (update.docChanged || update.selectionSet || update.viewportChanged) {
        this.decorations = this.getBracketDecorations(update.view);
      }
    }

    getBracketDecorations(view) {
      const { doc } = view.state;
      const decorations = [];
      const stack = [];
      const colors = [1, 2, 3, 4, 5, 6];

      for (let pos = 0; pos < doc.length; pos += 1) {
        const char = doc.sliceString(pos, pos + 1);
        if (char === "(" || char === "[" || char === "{") {
          stack.push({ type: char, from: pos });
        } else if (char === ")" || char === "]" || char === "}") {
          const open = stack.pop();
          if (open && open.type === this.getMatchingBracket(char)) {
            const color = colors[stack.length % colors.length];
            decorations.push(
              Decoration.mark({ class: `ilumic-bpc-${color}` }).range(
                open.from,
                open.from + 1
              ),
              Decoration.mark({ class: `ilumic-bpc-${color}` }).range(
                pos,
                pos + 1
              )
            );
          }
        }
      }

      decorations.sort((a, b) => a.from - b.from || a.startSide - b.startSide);

      return Decoration.set(decorations);
    }

    // eslint-disable-next-line class-methods-use-this
    getMatchingBracket(closingBracket) {
      switch (closingBracket) {
        case ")":
          return "(";
        case "]":
          return "[";
        case "}":
          return "{";
        default:
          return null;
      }
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);

function bracketPairColorization() {
  return [bracketPairColorizationPlugin];
}

let create = () => {
  const dom = document.createElement("div");
  return { dom };
};
export const extensions = [
  ilumictheme(),
  bracketPairColorization(),
  hyperLink,
  basicSetup,
  inlineSuggestion({
    fetchFn: () => {},
    delay: 1000,
  }),
  showMinimap.compute(["doc"], () => {
    return {
      create,
      displayText: "characters",
      showOverlay: "hover",
      gutters: [],
    };
  }),
  indentationMarkers(),
  placeholder("Type '/' for commands..."),
];
