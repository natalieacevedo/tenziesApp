function Die({ value, isHeld, switchIsHeld, index }) {
  
    let dieFaceClass;
    let extraDots;
    if (value === 1) {
      dieFaceClass = "one";
      extraDots = <span className="dot"></span>;
    } else if (value === 2) {
      dieFaceClass = "two";
      extraDots = (
        <>
          <span className="dot"></span>
          <span className="dot"></span>
        </>
      );
    } else if (value === 3) {
      dieFaceClass = "three";
      extraDots = (
        <>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </>
      );
    } else if (value === 4) {
      dieFaceClass = "four";
      extraDots = (
        <>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </>
      );
    } else if (value === 5) {
      dieFaceClass = "five";
      extraDots = (
        <>
          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          <div className="column">
            <span className="dot"></span>
          </div>

          <div className="column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </>
      );
    } else {
      dieFaceClass = "six";
      extraDots = (
        <>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </>
      );
    }

    return (
      <div
        onClick={(e) => switchIsHeld(e, index)}
        className={`littleBox ${dieFaceClass} ${isHeld ? "selected" : ""}`}
      >
        {extraDots}
      </div>
    );
}

export default Die;
