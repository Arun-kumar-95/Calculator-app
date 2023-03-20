// DEFING THE CALCULATE FUNCTION

export const calculateResult = (state) => {
  // CONVERTING THE PREVIOUS AND CURRENT VALUE TO NUMBER
  const prev = parseFloat(state.previousValue);
  const current = parseFloat(state.currentValue);

  //   INITIALIZING THE EMPTY OUTPUT VALUE
  let output = "";
  //   PERFORMING THE MATHEMATICAL OPERATION BASED ON OPERATION SIGN 
  switch (state.operation) {
    case "+":
      output = prev + current;
      break;
    case "-":
      output = prev - current;
      break;
    case "✕":
      output = prev * current;
      break;
    case "÷":
      output = prev / current;
      break;
    case "%":
      output = prev % current;
      break;
    default:
      output = "";
  }

  //   converting back output to string
  return output.toString();
};
