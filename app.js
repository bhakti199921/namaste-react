import React from "react";
import ReactDOM from "react-dom/client";

const elem=<span>React Element</span>

const Title =()=>(<h1>{elem} Namaste React uisng JSX</h1>);

const number=1000;

const HeadingComponent = () => (
  <div id="container">
    <Title/>
    {Title()}
    <h2>{100+200}</h2>
    <h1 className="heading">Namste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
