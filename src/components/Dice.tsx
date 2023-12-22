import { useState } from "react";

interface DiceProps {
  sides: number;
  roll: number;
}

const [dice, rollIt] = useState(1);

const Dice = ({ sides, roll }: DiceProps) => {
  const sideDivs = Array.from({ length: sides }, (_, index) => {
    let key = `d${sides}-s${index + 1}`;
    return (
      <div key={key} className={key}>
        {index + 1}
      </div>
    );
  });
  return <div className={`d${sides}`}>{sideDivs}</div>;
};

export default Dice;
