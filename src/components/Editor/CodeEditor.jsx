import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from 'prismjs/components/prism-core';
import "prismjs/components/prism-python";
import '../../styles/prism-vsc-dark-plus.css';
import { BsArrowCounterclockwise } from "react-icons/bs";
import "../../styles/CodeEditor.css";

// Extend the Python grammar to highlight variables
languages.python.variable = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/;

const CodeEditor = ({ code, setCode, onRunCode, onRestart}) => {
  
  return (
    <>
      <div className="btns-bar">
        <div className="restart-button">
            <button onClick={onRestart}>
              <BsArrowCounterclockwise />
            </button>
        </div>
        <div className="submit-button">
            <button onClick={onRunCode}>
              Submit Answer
            </button>
        </div>
      </div>

      <section className="code-editor panel">
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) => highlight(code, languages.python, "python")} // Add syntax highlighting logic if needed
          padding={10}
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 16,
          }}
        />
      </section>
    </>
  );
};

export default CodeEditor;