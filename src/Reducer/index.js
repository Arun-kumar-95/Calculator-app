// IMPORTING THE ATIONS
import { ACTIONS } from "../Actions";

// IMPORTING THE CALCULATE FUNCTION
import { calculateResult } from "../AppFeature";

// DEFINGING THE REDUCER FUNCTION
export const reducer = (state, action) => {
  switch (action.type) {
    // ADD DIGITS CASE
    case ACTIONS.ADD_DIGITS:
      // PERFORMING THE ADD DIGITS AND RETURNING THE NEW UPDATE STATE
      return {
        ...state,
        currentValue: `${state.currentValue || ""}${action.payload}`,
      };
      
    // CLEAR SCREEN CASE
    case ACTIONS.CLEAR:
      // BY SETTING THE EMPTY STSTE WE CAN CLEAR THE SCREEN
      return {};
    // DELETING THE DIGITS CASE
    case ACTIONS.BACKSPACE:
      // RETURN EMPTY STATE IF THE CURRENT VALUE IS NULL
      if (state.currentValue == null) return state;

      //   RETURN THE NEW UPDATED STATE
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1), // DELETING SINGLE DIGITS WITH THE HELP OF SLICE FUNCTION
      };
    //   OPERATION CASE
    case ACTIONS.OPERATION:
      // RETURN THE EMPTY STATE IF THE CURRENT VALUE OR PREVIOUS STATE IS NULL
      if (state.currentValue == null && state.previousvalue == null) {
        return state;
      }
      // RETURNIUNG THE NEW UPDATE STATE
      return {
        ...state,
        previousValue: state.currentValue,
        operation: action.payload,
        currentValue: null,
      };
    // COMBINED CASE
    case ACTIONS.COMBINED:
      // RETURN THE EMPTY STATE IF THE CURRENT VALUE OR PREVOUS VALUE ID NULL
      if (state.currentValue == null && state.previousvalue == null) {
        return state;
      }
      // IF STATE DOESNOT HAVE COUNT
      if (state.count == null) {
        return {
          ...state,
          count: 0,
          previousValue: state.currentValue,
          currentValue: null,
          operation: "+",
        };
      }
      // IF THE SATE HAVE COUNT 0
      if (state.count === 0) {
        return {
          ...state,
          count: state.count + 1,
          previousValue: state.currentValue,
          currentValue: null,
          operation: "÷",
        };
      }

      //  IF THE STATE HAVE COUNT = 1
      if (state.count === 1) {
        return {
          ...state,
          count: state.count + 1,
          previousValue: state.currentValue,
          currentValue: null,
          operation: "-",
        };
      }
      // IF THE STATE HAS COUNT 2
      if (state.count === 2) {
        return {
          ...state,
          count: null,
          previousValue: state.currentValue,
          currentValue: null,
        };
      }
      // ELSE SIMPLEY RETURN THE STATE WITHOUT COUNT
      return {
        ...state,
        previousValue: state.currentValue,
        currentValue: null,
      };
    // CALCULATE CASE
    case ACTIONS.CALCULATE:
      // RETURN THE EMPTY STATE IF EIHER OF THESE IS NOT PRESENT
      if (
        state.operation == null ||
        state.currentValue == null ||
        state.previousValue == null
      ) {
        return state;
      }
      // RETURN THE NEW UPDATED STATE
      return {
        ...state,
        currentValue: calculateResult(state),
        previousValue: null,
        operation: null,
      };

    // RETURN THE EMPTY STATE IS NOTHING MATCHES
    default:
      return state;
  }
};
