import React, { useState } from "react";
import LeftPanel from "./components/Layout/LeftPanel";
import RightPanel from "./components/Layout/RightPanel";
import instructions from "./assets/instructions";
import hogwartsLogo from "./assets/hogwarts-logo.png";
import "./styles/App.css";

function App() {
  const [code, setCode] = useState(
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
`);

  return (
    <main className="app-container">
      <LeftPanel instructions={instructions} logo={hogwartsLogo} />
      <RightPanel code={code} setCode={setCode} />
    </main>
  );
}

export default App;