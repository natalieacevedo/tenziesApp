function Die({ value, isHeld }) {
  console.log(isHeld);
  return (
    <div className="littleBox">
      <h4 className="dieNum">{value}</h4>
    </div>
  );
}

export default Die;
