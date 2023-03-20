// IMPORTING THE STYLE
import "../styles.css";
// IMPORTING THE REACT AND USE REDUCER FROM REACT
import React, { useReducer } from "react";
// IMPORTING THE ACTION
import { ACTIONS } from "../Actions";
// IMPORTING THE REDUCER FUNCTION
import { reducer } from "../Reducer";
// INITIALIZING THE INITIAL STATE
const initialState = "";

// DEFINING THE APP FUNCTION
const App = () => {
  // DEFINGIN THE REDUCER HOOK WHICH TOOK REDUCER AS A PARAMETE AND INITIAL STATE
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // DEFINING THE UI FOR THE APP
    <div className="calculator-container">
      <div className="keypad keypad-grid">
        {/* DEFINING THE SCREEN FOR THE CALCULATOR APP*/}
        <div className="screen">
          <div className="previous-operand">{state.previousValue}</div>
          <div className="current-operand">
            <span className="operation-sign">{state.operation}</span>
            {state.currentValue}
          </div>
        </div>
        {/* DEFINING THE  BUTTONS FOR THE CALCULATOR APP*/}
        <button digit="Clear" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
          C
        </button>
        <button
          digit="+/-"
          onClick={() => dispatch({ type: ACTIONS.COMBINED })}
        >
          +/-
        </button>
        <button
          digit="%"
          onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: "%" })}
        >
          %
        </button>
        <button
          digit="÷"
          className="btn-operation"
          onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: "÷" })}
        >
          ÷
        </button>
        <button
          value="7"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "7" })}
        >
          7
        </button>
        <button
          value="8"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "8" })}
        >
          8
        </button>
        <button
          value="9"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "9" })}
        >
          9
        </button>
        <button
          digit="✕"
          className="btn-operation"
          onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: "✕" })}
        >
          x
        </button>
        <button
          value="4"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "4" })}
        >
          4
        </button>
        <button
          value="5"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "5" })}
        >
          5
        </button>
        <button
          value="6"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "6" })}
        >
          6
        </button>
        <button
          name="-"
          className="btn-operation"
          onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: "-" })}
        >
          -
        </button>
        <button
          value="1"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "1" })}
        >
          1
        </button>
        <button
          value="2"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "2" })}
        >
          2
        </button>
        <button
          value="3"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "3" })}
        >
          3
        </button>
        <button
          digit="+"
          className="btn-operation"
          onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: "+" })}
        >
          +
        </button>
        <button
          digit="Back"
          onClick={() => dispatch({ type: ACTIONS.BACKSPACE })}
        >
          ←
        </button>
        <button
          value="."
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "." })}
        >
          .
        </button>
        <button
          value="0"
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: "0" })}
        >
          0
        </button>
        <button
          digit="="
          className="btn-operation"
          onClick={() => dispatch({ type: ACTIONS.CALCULATE })}
        >
          =
        </button>
      </div>
    </div>
  );
};

// EXPORTING THE APP FUNCTION
export default App;
