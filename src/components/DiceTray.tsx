import Dice from "./Dice";

interface DiceTrayProps {
  sides: number;
  n: number;
  dice: number;
}

function DiceTray({ sides, dice }: DiceTrayProps) {
  const diceNodes = Array.from({ length: dice }, () => {
    return <Dice sides={sides} roll={Math.floor(Math.random() * 6) + 1}></Dice>;
  });
  return <h1 className="DiceTray">{diceNodes}</h1>;
}

export default DiceTray;
