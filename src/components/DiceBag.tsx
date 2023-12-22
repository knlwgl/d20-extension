const DiceBag = () => {
  return (
    <div>
      <select name="Dice" id="Bag" className="bag">
        <option value="d4">d4</option>
        <option value="d6">d6</option>
        <option value="d10">d10</option>
        <option value="d12">d12</option>
        <option value="d20">d20</option>
      </select>
    </div>
  );
};

export default DiceBag;
