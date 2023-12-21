import { MouseEventHandler } from "react";

interface Props {
  onclick: MouseEventHandler;
}

function RollButton({ onclick }: Props) {
  return (
    <button type="button" className="btn btn-primary" onClick={onclick}>
      ROLL
    </button>
  );
}

export default RollButton;
