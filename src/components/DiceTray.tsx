import Dice from "./Dice";

interface DiceTrayProps {
  sides: number;
  n: number;
}

function DiceTray({ sides, n }: DiceTrayProps) {
  return (
    <h1 className="DiceTray">
      <Dice sides={sides} roll={n}></Dice>
    </h1>
  );
}

export default DiceTray;
