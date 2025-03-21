import React, { useState } from "react";

const Calculator = () => {
  const [input, setinput] = useState("");
  const [result, setresult] = useState(null);

  const handlenumbercheck = (number) => {
    setinput((prevInput) => prevInput + number);
  };

  const handleoperatorcheck = (operator) => {
    setinput((prevInput) => prevInput + operator);
  };

  const handlerclear = () => {
    setinput("");
    setresult(null);
  };

  const handlercalculate = () => {
    try {
      let modifiedInput = input.replace("x", "*").replace("÷", "/");
      setresult(eval(modifiedInput));
    } catch (error) {
      setresult("Error");
    }
  };


  return (
    <div>
      <div className="main">
        <div className="calculator">
          <div className="display" id="display">
            {result !== null ? result : input}
          </div>
          <div className="buttons">
            <button className="button gray" onClick={handlerclear}>
              AC
            </button>
            <button className="button gray" onClick={() => handleoperatorcheck("+/-")}>
              +/-
            </button>
            <button className="button gray" onClick={() => handleoperatorcheck("%")}>
              %
            </button>
            <button className="button orange" onClick={() => handleoperatorcheck("÷")}>
              ÷
            </button>

            <button className="button dark" onClick={() => handlenumbercheck("7")}>7</button>
            <button className="button dark" onClick={() => handlenumbercheck("8")}>8</button>
            <button className="button dark" onClick={() => handlenumbercheck("9")}>9</button>
            <button className="button orange" onClick={() => handleoperatorcheck("x")}>×</button>

            <button className="button dark" onClick={() => handlenumbercheck("4")}>4</button>
            <button className="button dark" onClick={() => handlenumbercheck("5")}>5</button>
            <button className="button dark" onClick={() => handlenumbercheck("6")}>6</button>
            <button className="button orange" onClick={() => handleoperatorcheck("-")}>-</button>

            <button className="button dark" onClick={() => handlenumbercheck("1")}>1</button>
            <button className="button dark" onClick={() => handlenumbercheck("2")}>2</button>
            <button className="button dark" onClick={() => handlenumbercheck("3")}>3</button>
            <button className="button orange" onClick={() => handleoperatorcheck("+")}>+</button>

            <button className="button dark" onClick={() => handlenumbercheck("0")}>0</button>
            <button className="button dark" onClick={handlercalculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
