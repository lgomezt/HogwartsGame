import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Instructions from "./Instructions";
import "../../styles/LeftPanel.css";

const LeftPanel = ({ instructions, logo }) => (
  <section className="left-panel panel">
    <aside>
      <header>
        <Navbar />
      </header>
      <div>
        <Title logo={logo} />
        <Instructions instructions={instructions} />
      </div>
    </aside>
  </section>
);

export default LeftPanel;