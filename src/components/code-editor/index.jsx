import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = (props) => {
  // to solve the issue of theme create store and use it in all the components
  const [theme, setTheme] = useState("light");
  async function handleEditorChange(value, event) {}

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <div className="h-[100%] w-[100%] ">
      <Editor
        options={{
          wordWrap: "off",
          minimap: { enabled: false },
          fontSize: 15,
          readOnly: true,
          contextmenu: false,
        }}
        height="100%"
        theme={theme === "dark" ? "vs-dark" : "light"}
        onChange={handleEditorChange}
        {...props}
      />
    </div>
  );
};

export default CodeEditor;
