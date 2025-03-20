import React from 'react'

const Calculator = () => {
  return (
    <div>
        <div className="main">
        <div className="calculator">
        <div className="display" id="display">1234</div>
        <div className="buttons">
            <button className="button gray" onclick="clearDisplay()">AC</button>
            <button className="button gray">+/-</button>
            <button className="button gray">%</button>
            <button className="button orange">÷</button>
            
            <button className="button dark" onclick="updateDisplay('7')">7</button>
            <button className="button dark" onclick="updateDisplay('8')">8</button>
            <button className="button dark" onclick="updateDisplay('9')">9</button>
            <button className="button orange">×</button>
            
            <button className="button dark" onclick="updateDisplay('4')">4</button>
            <button className="button dark" onclick="updateDisplay('5')">5</button>
            <button className="button dark" onclick="updateDisplay('6')">6</button>
            <button className="button orange">-</button>
            
            <button className="button dark" onclick="updateDisplay('1')">1</button>
            <button className="button dark" onclick="updateDisplay('2')">2</button>
            <button className="button dark" onclick="updateDisplay('3')">3</button>
            <button className="button orange">+</button>
            
            <button className="button dark" onclick="updateDisplay('0')">0</button>
            <button className="button dark">.</button>
            <button className="button dark" onclick="calculateResult()">=</button>
        </div>
    </div>

        </div>
    </div>
  )
}

export default Calculator
