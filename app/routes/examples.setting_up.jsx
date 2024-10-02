import { MarkdownExamplesArticle } from "../components/markdown-examples-article";
export const meta = () => {
  return [
    { title: "CodeMirror Docs" },
    { name: "description", content: "A clone of the CodeMirror docs." },
  ];
};

export default function Index() {
  var markdown = `# Setting Up CodeMirror 6 with Vanilla JavaScript and npm

CodeMirror 6 is a modern code editor that is modular and designed to work with npm. This guide walks you through setting up CodeMirror 6 using vanilla JavaScript with npm and a bundler like Vite, though the process is adaptable to any build setup.

---

## 1. Install CodeMirror Using npm

First, you need to install the core CodeMirror package along with any language modes or extensions that you need. In this example, we will add support for JavaScript.

Run the following commands in your project directory:

\`\`\`bash
# Install CodeMirror core and any language extensions or plugins
npm install codemirror @codemirror/lang-javascript
\`\`\`

### Explanation:
- **\`codemirror\`**: This is the core package that provides the basic editor functionality.
- **\`@codemirror/lang-javascript\`**: This package provides JavaScript language support. You can install additional language support packages if needed (e.g., \`@codemirror/lang-python\` for Python syntax highlighting).

---

## 2. Create the Editor in Vanilla JavaScript

Now, create a JavaScript file (e.g., \`main.js\`) where you initialize CodeMirror. This file will import the necessary modules and set up the editor.

\`\`\`javascript
// Import the core CodeMirror modules
import { EditorView, basicSetup } from "codemirror";

// Import the JavaScript language support
import { javascript } from "@codemirror/lang-javascript";

// Create the editor view and attach it to the page
let editor = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.getElementById("editor") // Attach to a specific DOM element
});
\`\`\`

### Explanation:
- **\`EditorView\`**: This is the core view that renders the editor on the page.
- **\`basicSetup\`**: A default set of basic features like line numbers and key bindings.
- **\`javascript()\`**: Adds JavaScript syntax highlighting.
- **\`parent\`**: The DOM element where the editor will be rendered (in this case, an element with the ID \`editor\`).

---

## 3. Set Up HTML Structure

In the HTML file, you need to create a \`<div>\` element where CodeMirror will be injected. Here's a simple HTML structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeMirror 6 Editor</title>
</head>
<body>
  <div id="editor"></div> <!-- The editor will be attached here -->
  <script type="module" src="/main.js"></script> <!-- Load the main script -->
</body>
</html>
\`\`\`

### Explanation:
- **\`<div id="editor">\`**: This is where CodeMirror will render the editor.
- **\`<script type="module">\`**: The \`main.js\` script is loaded as a module, enabling the use of ES module imports.

---

## 4. Running the Project

If you're using a bundler like Vite, simply run the development server to see your CodeMirror editor in action. You should see a basic code editor with JavaScript syntax highlighting inside the element with the ID \`editor\`.    `;

  return <MarkdownExamplesArticle markdown={markdown} />;
}
