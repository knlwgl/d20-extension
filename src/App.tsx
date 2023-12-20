import { useState } from "react";
import "./App.css";
import DiceBox from "./components/DiceBox";
import RollButton from "./components/RollButton";

function App() {
  const [roll, setRoll] = useState(1);

  return (
    <>
      <div>
        <DiceBox n={roll} />
        <RollButton
          onclick={() => setRoll(Math.floor(Math.random() * 20) + 1)}
        />
      </div>
    </>
  );
}

export default App;
