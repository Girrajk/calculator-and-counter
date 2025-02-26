import React, { useState } from "react";
import "./Cal.css";

const Cal = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [oper, setOper] = useState("Select Ooperator");
    const [result, setResult] = useState(null);

    function changeHendler1(e) {
        setNum1(e.target.value);
    }
    function changeHendler2(e) {
        setNum2(e.target.value);

    }
    function changeHendler3(e) {
        setOper(e.target.value);
    }

    function calculateResult() {
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);
        let res;


        if(!num1 || !num2 || oper === "Select Operator"){
            alert("Invalid input");
            return
        }

       
        switch (oper) {
            case "+":
                res = n1 + n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "%":
                res = n2 !==0 ? n1 % n2 : alert("Cannot be Divisibal by zero");
                break;
            case "/":
                res = n2 !==0 ? n1 / n2 : alert("Cannot be Divizibal by zero");
                break;
            case "*":
                res = n1 * n2;
                break;
            default:
                alert("Invalid Operator !!!");
        }
        setResult(res);



    }

    return (
        <div className="cal-container">
            <h1>Simpal Calculator</h1>
            <label htmlFor="num1">Number1:</label>
            <input type="number" placeholder="Enter Number 1" id="num1" value={num1} onChange={changeHendler1} />

            <select name="opr" id="opr" value={oper} onChange={changeHendler3}>
                <option>select Oprator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>

            </select>
            <label htmlFor="num2">Number2:</label>
            <input type="number" placeholder="Enter Number 2" id="num2" value={num2} onChange={changeHendler2} />
            <button onClick={calculateResult}>Result</button>
            <p>{result}</p>

        </div>
    )
}
export default Cal;