import { useState } from "react";
import "./App.css";
import DiceBag from "./components/DiceBag";
import DiceTray from "./components/DiceTray";
import RollButton from "./components/RollButton";

function App() {
  const [roll, setRoll] = useState(1);
  const [diceSize] = useState(6);

  return (
    <>
      <div>
        <DiceBag></DiceBag>
        <DiceTray sides={diceSize} n={roll} />
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
