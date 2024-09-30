import {
  CiBook,
  CiBulb,
  CiChatConversation,
  CiDashboardSpeed01,
  CiDashboardSpeed02,
  CiEditPencilLine01,
  CiGithub,
  CiLayers,
  CiLeftToRightListNumber,
  CiMenuAlt01,
  CiMobile,
  CiMonitor,
  CiPuzzle,
  CiSearchMagnifyingGlass,
  CiSyntaxHighlighting,
} from "../components/icons";
import { startCodemirror } from "../components/codemirror/main";
import ReactDOMServer from "react-dom/server";

import { useEffect, useState } from "react";

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
  const featuresGrid = [
    <div className="grid-element" key="1">
      <div className="grid-title">
        <CiMonitor /> <span>Accesibility</span>
      </div>
      <p>Works well with screen readers and keyboard-only users.</p>
    </div>,
    <div className="grid-element" key="2">
      <div className="grid-title">
        <CiMobile /> <span>Mobile Support</span>
      </div>
      <p>
        Use the platform&apos;s native selection and editing features on phones.
      </p>
    </div>,
    <div className="grid-element" key="3">
      <div className="grid-title">
        <CiMenuAlt01 /> <span>Bidirectional Text</span>
      </div>
      <p>Support mixing of right-to-left and left-to-right text.</p>
    </div>,
    <div className="grid-element" key="4">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Syntax Highlighting</span>
      </div>
      <p>Color code to reflect syntactic structure.</p>
    </div>,
    <div className="grid-element" key="5">
      <div className="grid-title">
        <CiLeftToRightListNumber /> <span>Line Numbers</span>
      </div>
      <p>
        Display gutters with line numbers or other information next to the code.
      </p>
    </div>,
    <div className="grid-element" key="6">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Autocompletion</span>
      </div>
      <p>Provide language-specific completion hints in the editor.</p>
    </div>,
    <div className="grid-element" key="7">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Code Folding</span>
      </div>
      <p>Temporarily hide parts of the document.</p>
    </div>,
    <div className="grid-element" key="8">
      <div className="grid-title">
        <CiSearchMagnifyingGlass /> <span>Search / Replace</span>
      </div>
      <p>Editor-specific search, regexp search, and replace functionality.</p>
    </div>,
    <div className="grid-element" key="9">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Full Parsing</span>
      </div>
      <p>Detailed parse trees allow many types of language integration.</p>
    </div>,
    <div className="grid-element" key="10">
      <div className="grid-title">
        <CiPuzzle /> <span>Extension Interface</span>
      </div>
      <p>Robustly implement demanding editor extensions.</p>
    </div>,
    <div className="grid-element" key="11">
      <div className="grid-title">
        <CiLayers /> <span>Modularity</span>
      </div>
      <p>Most features are implemented on top of a generic public API.</p>
    </div>,
    <div className="grid-element" key="12">
      <div className="grid-title">
        <CiDashboardSpeed02 /> <span>Speed</span>
      </div>
      <p>Remains responsive even on huge documents and long lines.</p>
    </div>,
    <div className="grid-element" key="13">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Bracket Closing</span>
      </div>
      <p>Automatically insert matching brackets during typing.</p>
    </div>,
    <div className="grid-element" key="14">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Linting</span>
      </div>
      <p>Show error and warning messages in the editor.</p>
    </div>,
    <div className="grid-element" key="15">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Flexible Styling</span>
      </div>
      <p>Mix font styles and sizes, add widgets in the content.</p>
    </div>,
    <div className="grid-element" key="16">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Theming</span>
      </div>
      <p>Import or create custom visual editor styles.</p>
    </div>,
    <div className="grid-element" key="17">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Collaborative Editing</span>
      </div>
      <p>Allow multiple users to edit the same document.</p>
    </div>,
    <div className="grid-element" key="18">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Undo History</span>
      </div>
      <p>Undo and redo functionality with collab editing support.</p>
    </div>,
    <div className="grid-element" key="19">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Multiple Selections</span>
      </div>
      <p>Select and edit multiple ranges of the document at once.</p>
    </div>,
    <div className="grid-element" key="20">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>Internationalization</span>
      </div>
      <p>Provide custom text to display or announce to the user.</p>
    </div>,
    <div className="grid-element" key="21"></div>,
    <div className="grid-element" key="22">
      <div className="grid-title">
        <CiSyntaxHighlighting /> <span>...and more</span>
      </div>
      <p>Find a full description of the library&apos;s features in the docs.</p>
    </div>,
  ];
  const gridWidth = 300;
  var [gridContent, setGridContent] = useState(<></>);
  useEffect(() => {
    var elementByColumnInGrid =
      Math.floor(Math.floor(document.body.offsetWidth / gridWidth) / 2) * 2;
    var grid = [];
    var index = 0;
    var indexelem = 1;
    featuresGrid.forEach((fg) => {
      indexelem++;
      if (indexelem > elementByColumnInGrid) {
        index++;
        indexelem = 1;
      }
      if (grid[index]) {
        grid[index].push(fg);
      } else {
        grid[index] = [fg];
      }
    });
    console.log(elementByColumnInGrid, grid);
    setGridContent(
      <>
        {grid.map((col) => {
          return (
            <>
              <div className="grid-row" key={col}>
                {col.map((fg) => {
                  return (
                    <>
                      {fg}
                      {ReactDOMServer.renderToString(fg).includes(
                        "Mobile Support"
                      ) ? (
                        <div className="grid-row"></div>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </>
    );
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
                if (parseInt(elem.getAttribute("index")) >= text.length - 2) {
                  clearInterval(a);
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
        <center>
          <span className="title-category">
            <asterisk>*</asterisk> FEATURES <asterisk>*</asterisk>
          </span>
        </center>
        <br />
        <div className="grid">{gridContent}</div>
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
