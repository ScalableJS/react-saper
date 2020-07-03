import * as React from "react";
import "./styles.css";

import { Cell } from "./Cell";

export default function App() {
  let list = [];
  function incCount() {
    console.log(123);
  }

  const cellsType = Array(20)
    .fill(true)
    .concat(Array(80).fill(false))
    .sort(() => Math.random() - 0.5);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      list.push(
        <Cell
          key={x * 10 + y}
          onClick={incCount}
          x={x}
          y={y}
          size={40}
          type={cellsType[x + y * 10]}
        />
      );
    }
  }
  return (
    <div className="App">
      <section style={{ pasition: "relative" }}>{list}</section>
    </div>
  );
}
