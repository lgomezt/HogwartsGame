import React, { useEffect, useRef } from "react";
import "../../styles/ConsoleOutput.css";

const ConsoleOutput = ({ output }) => {
  const consoleRef = useRef(null);

  useEffect(() => {
    console.log(consoleRef.current); 
    // Scroll to the bottom whenever output changes
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <section className="console-output panel" ref={consoleRef}>
      <p>Console Output:</p>
      <pre key={output.length}>{output}</pre>
    </section>
  );
}

export default ConsoleOutput;