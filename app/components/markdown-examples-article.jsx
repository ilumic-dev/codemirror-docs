/* eslint-disable react/prop-types */
import { Nav } from "./nav";
import { marked } from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";
import "./cmhljstheme.css";

hljs.registerLanguage("javascript", javascript);

export function MarkdownExamplesArticle({ markdown }) {
  useEffect(() => {
    setTimeout(() => {
      hljs.highlightAll();
    }, 100);
  }, []);
  return (
    <>
      <Nav selected="examples" />
      <section
        className="blank"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </>
  );
}
