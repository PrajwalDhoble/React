import React from "react";
import InputBoxes from "./Components/InputBoxes";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <div className="App">
        <InputBoxes length={4} perBox={1} onChange={(val) => setValue(val)} />
      </div>
      <h3> {value} </h3>
    </>
  );
}
