import { useState } from "react";
import "./App.css";
import DiceTray from "./components/DiceTray";
import RollButton from "./components/RollButton";

function App() {
  const [roll, setRoll] = useState(1);
  const [diceSize] = useState(6);
  const [nDice, changeDice] = useState(1);

  return (
    <>
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => changeDice(nDice + 1)}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => changeDice(nDice === 1 ? 1 : nDice - 1)}
          >
            -
          </button>
        </div>
        <DiceTray sides={diceSize} n={roll} dice={nDice} />
        <RollButton
          onclick={() => {
            const n = Math.floor(Math.random() * 6) + 1;
            if (n == roll) {
              setRoll(0);
              setTimeout(() => setRoll(n), 1500);
            } else {
              setRoll(n);
            }
          }}
        />
      </div>
    </>
  );
}

export default App;
