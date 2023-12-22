import Dice from "./Dice";

function DiceBox({ n }: { n: number }) {
  return (
    <h1 className="DiceTray">
      <Dice sides={6} roll={n}></Dice>
    </h1>
  );
}

export default DiceBox;
