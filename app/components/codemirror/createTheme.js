import { EditorView } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";

/**
 * It creates a codemirror theme. **It is not used for creating AiraCloud Themes.** - AiraCloud Themes are coded in CSS. [Learn more](/docs/airacloud-themes-css.md)
 * @param {theme_i} - Theme options. **Soon documentation**
 * @returns {Object} - The codemirror theme
 */
export default function createTheme(theme_i) {
  const variant = theme_i.variant;
  const settings = theme_i.settings;
  const styles = theme_i.styles;
  const theme = EditorView.theme(
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "&": {
        backgroundColor: settings.background,
        color: settings.foreground,
      },
      ".cm-content": {
        caretColor: settings.caret,
      },
      ".cm-activeLine": {
        backgroundColor: settings.lineHighlight,
      },
      ".cm-gutters": {
        backgroundColor: settings.gutterBackground,
        color: settings.gutterForeground,
        border: "none",
      },
      "&.cm-focused .cm-selectionBackground": {
        backgroundColor: settings.selection,
      },
      "&:not(.cm-focused) .cm-selectionBackground": {
        backgroundColor: settings.selectionUnfocus,
      },
      ".cm-activeLineGutter": {
        backgroundColor: settings.lineHighlight,
        color: settings.gutterActiveForeground,
      },
    },
    {
      dark: variant === "dark",
    }
  );

  const highlightStyle = HighlightStyle.define(styles);
  const extension = [theme, syntaxHighlighting(highlightStyle)];

  return extension;
}
