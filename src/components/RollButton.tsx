interface Props {
  onclick: Function;
}

function RollButton({ onclick }: Props) {
  return <button onClick={() => onclick()}>ROLL</button>;
}

export default RollButton;
