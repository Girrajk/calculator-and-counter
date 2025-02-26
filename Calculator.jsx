import React, { useRef } from 'react';

const Calculator = () => {
    const number1Ref = useRef(null);
    const number2Ref = useRef(null);
    const operatorRef = useRef(null);
    const resultRef = useRef(null);

    const calculateResult = () => {
        const number1 = parseFloat(number1Ref.current.value);
        const number2 = parseFloat(number2Ref.current.value);
        const operator = operatorRef.current.value;

        let result;
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
                break;
            default:
                result = 'Invalid operator';
        }

        resultRef.current.value = result;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Simple Calculator</h1>
            <div>
                <input type="number" placeholder="Number 1" ref={number1Ref} style={{ marginRight: '10px' }} />
                <select ref={operatorRef} style={{ marginRight: '10px' }}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number" placeholder="Number 2" ref={number2Ref} style={{ marginRight: '10px' }} />
                <button onClick={calculateResult}>Calculate</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <input type="text" readOnly ref={resultRef} placeholder="Result" style={{ width: '200px', textAlign: 'center' }} />
            </div>
        </div>
    );
};

export default Calculator;
