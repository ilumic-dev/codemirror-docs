import {
  CiBook,
  CiBulb,
  CiChatConversation,
  CiEditPencilLine01,
  CiGithub,
} from "../components/icons";
import { startCodemirror } from "../components/codemirror/main";

import { useEffect } from "react";

export const meta = () => {
  return [
    { title: "CodeMirror Docs" },
    { name: "description", content: "A clone of the CodeMirror docs." },
  ];
};

export default function Index() {
  let text = "The most-extensible code editor for the web.";
  useEffect(() => {
    startCodemirror();
  }, []);
  return (
    <>
      <nav>
        <img src="/logo.svg" alt="CodeMirror" loading="lazy"></img>
        <div className="right">
          <div className="nav-element">
            <CiBulb /> Examples
          </div>
          <div className="nav-element">
            <CiBook /> Documentation
          </div>
          <div className="nav-element">
            <CiEditPencilLine01 /> Try
          </div>
          <div className="nav-element">
            <CiChatConversation /> Discuss
          </div>
          <div className="nav-element">
            <CiGithub /> Github
          </div>
        </div>
      </nav>
      <header>
        <img
          src="/codemirror.svg"
          alt="CodeMirror"
          loading="lazy"
          className="logo"
        ></img>
        <h1
          style={{ opacity: 0 }}
          ref={(elem) => {
            if (elem) {
              elem.style.width = elem.offsetWidth + "px";
              elem.innerText = "";
              elem.setAttribute("index", "0");
              var a = setInterval(() => {
                elem.innerHTML = elem.innerHTML.replace(
                  "<cursor>|</cursor>",
                  ""
                );
                if (parseInt(elem.getAttribute("index")) >= text.length - 1) {
                  clearInterval(a);
                  setInterval(() => {
                    elem.querySelector("cursor").style.display =
                      elem.querySelector("cursor").style.display === "none"
                        ? "inline"
                        : "none";
                  }, 500);
                  elem.innerHTML = elem.innerHTML.replace(
                    "<cursor>|</cursor>",
                    ""
                  );
                }
                elem.style.opacity = 1;
                if (text[parseInt(elem.getAttribute("index"))] === "") {
                  elem.innerHTML += "<space> </space><cursor>|</cursor>";
                } else {
                  elem.innerHTML +=
                    text[parseInt(elem.getAttribute("index"))] +
                    "<cursor>|</cursor>";
                }
                elem.setAttribute(
                  "index",
                  parseInt(elem.getAttribute("index")) + 1
                );
              }, 100);
            }
          }}
        >
          {text}
        </h1>
      </header>
      <section className="editor-section">
        <div className="editor-example ilumic-editor"></div>
        <h1>Hola.</h1>
      </section>

      <svg style={{ position: "fixed" }} id="svgroundcorner">
        <defs>
          <filter id="selection-goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
              result="goo"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </>
  );
}
