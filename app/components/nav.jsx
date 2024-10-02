/* eslint-disable react/prop-types */
import {
  CiBook,
  CiBulb,
  CiChatConversation,
  CiEditPencilLine01,
  CiGithub,
} from "./icons";

export function Nav({ selected }) {
  function isSelected(txt) {
    return selected === txt ? " selected" : "";
  }
  return (
    <nav>
      <img src="/logo.svg" alt="CodeMirror" loading="lazy"></img>
      <div className="right">
        <div className={"nav-element" + isSelected("examples")}>
          <CiBulb /> Examples
        </div>
        <div className={"nav-element" + isSelected("documentation")}>
          <CiBook /> Documentation
        </div>
        <div className={"nav-element" + isSelected("try")}>
          <CiEditPencilLine01 /> Try
        </div>
        <div className={"nav-element" + isSelected("discuss")}>
          <CiChatConversation /> Discuss
        </div>
        <div className={"nav-element" + isSelected("github")}>
          <CiGithub /> Github
        </div>
      </div>
    </nav>
  );
}
