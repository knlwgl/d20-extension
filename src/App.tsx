import { useState } from "react";
import "./App.css";
import DiceBox from "./components/DiceBox";
import RollButton from "./components/RollButton";

function App() {
  const [count, setCount] = useState(0);
  let roll: string = "1";

  return (
    <>
      <div>
        <DiceBox s={roll}></DiceBox>
        <button onClick={() => (roll = "" + Math.floor(Math.random() * 6) + 1)}>
          ROLL
        </button>
      </div>
    </>
  );
}

export default App;
