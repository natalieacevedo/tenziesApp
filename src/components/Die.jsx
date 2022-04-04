function Die({ value, isHeld, switchIsHeld, index }) {
  return (
    <div onClick={(e) => switchIsHeld(e, index)} className="littleBox">
      <h4 className="dieNum">{value}</h4>
    </div>
  );
}

export default Die;

//className={`littleBox ${isHeld ? "selected" : ""}`}
