/**
 * ? IlumicTheme
 * It create a CodeMirror Theme wich depends on CSS Variables.
 */

import createTheme from "./createTheme";
import { tags as t } from "@lezer/highlight";

function cssvar(name) {
  return "var(--cm-" + name + ")";
}

var theme_i = {
  variant: "dark",
  settings: {
    background: cssvar("bg"),
    // [Discarded] backgroundImage:        cssvar("bg-img"),
    foreground: cssvar("foreground"),
    caret: cssvar("foreground"),
    selection: cssvar("selection"),
    // [Discarded temporaly] selectionMatch:         cssvar("selection-match"),
    gutterBackground: cssvar("gutter-bg"),
    gutterForeground: cssvar("gutter-fg"),
    gutterActiveForeground: cssvar("gutter-active-foreground"),
    lineHighlight: cssvar("lineHighlight"),
  },
  styles: [
    { tag: t.content, color: cssvar("content") },

    {
      tag: t.comment,
      color: cssvar("multiple-comment"),
      fontStyle: cssvar("theming--comment-fontStyle"),
    },
    {
      tag: t.lineComment,
      color: cssvar("line-comment"),
      fontStyle: cssvar("theming--comment-fontStyle"),
    },
    {
      tag: t.blockComment,
      color: cssvar("multiple-comment"),
      fontStyle: cssvar("theming--comment-fontStyle"),
    },
    {
      tag: t.docComment,
      color: cssvar("multiple-comment"),
      fontStyle: cssvar("theming--comment-fontStyle"),
    },

    { tag: t.name, color: cssvar("name") },
    { tag: t.labelName, color: cssvar("label-name") },

    { tag: t.namespace, color: cssvar("namespace") },
    { tag: t.macroName, color: cssvar("macroname") },

    { tag: t.definition(t.typeName), color: cssvar("type-definition") },
    { tag: t.typeName, color: cssvar("type-name") },
    { tag: t.standard(t.typeName), color: cssvar("type-standard") },

    { tag: t.tagName, color: cssvar("component") },
    { tag: t.standard(t.tagName), color: cssvar("tag-name") },

    { tag: t.variableName, color: cssvar("variable-name") },
    {
      tag: t.definition(t.variableName),
      color: cssvar("variable-name-definition"),
    },
    {
      tag: t.function(t.variableName),
      color: cssvar("variable-name-function"),
    },

    { tag: t.propertyName, color: cssvar("property-name") },
    { tag: t.function(t.propertyName), color: cssvar("property-function") },
    {
      tag: t.definition(t.propertyName),
      color: cssvar("property-definition"),
      fontWeight: cssvar("theming--composition-fontWeight"),
    },
    { tag: t.special(t.propertyName), color: cssvar("property-name") },

    // HTML
    { tag: t.attributeName, color: cssvar("attribute-name") },
    { tag: t.attributeValue, color: cssvar("attribute-value") },
    { tag: t.documentMeta, color: cssvar("document-meta") },
    { tag: t.angleBracket, color: cssvar("angle-bracket") },

    { tag: t.className, color: cssvar("classname") },
    { tag: t.constant(t.className), color: cssvar("classname-constant") },

    { tag: t.string, color: cssvar("string") },
    { tag: t.special(t.string), color: cssvar("string-special") },
    { tag: t.docString, color: cssvar("string") },
    { tag: t.literal, color: cssvar("literal") },
    { tag: t.character, color: cssvar("character") },
    { tag: t.number, color: cssvar("number") },
    { tag: t.integer, color: cssvar("integer") },
    { tag: t.float, color: cssvar("float") },
    { tag: t.bool, color: cssvar("bool") },
    { tag: t.regexp, color: cssvar("regexp") },
    { tag: t.escape, color: cssvar("escape") },
    { tag: t.color, color: cssvar("color") },
    { tag: t.url, color: cssvar("url") },
    {
      tag: t.keyword,
      color: cssvar("keyword"),
      fontWeight: cssvar("theming--keywords-fontWeight"),
    },
    { tag: t.self, color: cssvar("self") },
    { tag: t.null, color: cssvar("null") },
    { tag: t.atom, color: cssvar("atom") },
    { tag: t.unit, color: cssvar("unit") },
    {
      tag: t.modifier,
      color: cssvar("modifier"),
      fontWeight: cssvar("theming--composition-fontWeight"),
    },
    {
      tag: t.operator,
      color: cssvar("operator"),
      fontWeight: cssvar("theming--keywords-fontWeight"),
    },

    {
      tag: t.heading,
      color: cssvar("foreground"),
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },
    {
      tag: t.heading1,
      color: cssvar("heading1"),
      fontSize: "calc(var(--editor-font-size) + 10px)!important",
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },
    {
      tag: t.heading2,
      color: cssvar("heading2"),
      fontSize: "calc(var(--editor-font-size) + 7px)!important",
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },
    {
      tag: t.heading3,
      color: cssvar("heading3"),
      fontSize: "calc(var(--editor-font-size) + 4px)!important",
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },
    {
      tag: t.heading4,
      color: cssvar("heading4"),
      fontSize: "calc(var(--editor-font-size) + 1px)!important",
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },
    {
      tag: t.heading5,
      color: cssvar("heading5"),
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },
    {
      tag: t.heading6,
      color: cssvar("heading6"),
      fontWeight: cssvar("theming--md-heading-fontWeight"),
    },

    { tag: t.punctuation, color: cssvar("punctuation") },
    { tag: t.bracket, color: cssvar("bracket") },
    { tag: t.squareBracket, color: cssvar("square-bracket") },
    { tag: t.paren, color: cssvar("paren") },

    { tag: t.contentSeparator, color: cssvar("md-content-separator") },
    { tag: t.list, color: cssvar("md-list") },
    {
      tag: t.quote,
      color: cssvar("md-quote"),
      fontStyle: cssvar("theming--md-quote-fontStyle"),
    },
    { tag: t.strong, color: cssvar("md-bold"), fontWeight: "bold" },
    { tag: t.emphasis, color: cssvar("md-emphasis"), fontStyle: "italic" },
    { tag: t.link, color: cssvar("md-link") },
    { tag: t.monospace, color: cssvar("md-monospace") },
    {
      tag: t.strikethrough,
      color: cssvar("md-strikethrough"),
      textDecoration: "line-through",
    },
    { tag: t.meta, color: cssvar("md-meta") },

    {
      tag: t.operatorKeyword,
      color: cssvar("operator-keyword"),
      fontWeight: cssvar("theming--keywords-fontWeight"),
    },
    { tag: t.controlKeyword, color: cssvar("control-keyword") },
    {
      tag: t.definitionKeyword,
      color: cssvar("definition-keyword"),
      fontWeight: cssvar("theming--composition-fontWeight"),
    },
    {
      tag: t.moduleKeyword,
      color: cssvar("module-keyword"),
      fontWeight: cssvar("theming--keywords-fontWeight"),
    },
  ],
};

export const ilumictheme = () => {
  return createTheme(theme_i);
};
