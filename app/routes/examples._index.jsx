import { Nav } from "../components/nav";

export const meta = () => {
  return [
    { title: "CodeMirror Docs" },
    { name: "description", content: "A clone of the CodeMirror docs." },
  ];
};

export default function Index() {
  return (
    <>
      <Nav selected="examples" />
      <section className="blank">
        <h1>Examples</h1>
      </section>
    </>
  );
}
