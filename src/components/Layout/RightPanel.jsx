import React, { useState, useEffect } from "react";
import CodeEditor from "../Editor/CodeEditor";
import ConsoleOutput from "../Editor/ConsoleOutput";
import axios from "axios";
import "../../styles/RightPanel.css";

const RightPanel = ({ code, setCode }) => {
  const [output, setOutput] = useState("");

  const handleRestart = () => {
    setOutput("");
    setCode(
      `number_to_test = 15
divisible_by_3 = number_to_test % 3 == 0
divisible_by_5 = number_to_test % 5 != 0

if divisible_by_3 or divisible_by_5:
    ans = "Gryffindor"
if divisible_by_3: 
    ans = "Ravenclaw"
elif divisible_by_5: 
    ans = "Slytherin"
else:
    ans = number_to_test

print(ans) 
`
    );
  };

  const handleRunCode = async () => {
    try {
      // const response = await axios.post("http://127.0.0.1:5000/execute", { 
        const response = await axios.post("https://hogwartsgamebackend.onrender.com", { 
        code, // Sends { "code": <your-code> }
      });
    
      // Handle the response, including any errors in the data
      const { output, error } = response.data;
      setOutput((prevOutput) =>
        prevOutput + (error ? `${error} \n` : `Output:\n${output} \n`)
      );
    
    } catch (error) {
      // Handle exceptions like network issues or HTTP errors
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Error connecting to the server.";
      setOutput((prevOutput) => prevOutput + `${errorMessage} \n`);
      console.error("Axios error:", error);
    }
  };

  return (
    <section className="right-panel panel">
      <CodeEditor code={code} setCode={setCode} onRunCode={handleRunCode} onRestart={handleRestart}/>
      <ConsoleOutput output={output}/>
    </section>
  );
}

export default RightPanel;