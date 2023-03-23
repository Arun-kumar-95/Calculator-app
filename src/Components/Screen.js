const Screen = (props) => {
  const { state } = props;
  return (
    <div className="screen">
      <div className="previous-operand">{state.previousValue}</div>
      <div className="current-operand">
        <span className="operation-sign">{state.operation}</span>
        {state.currentValue}
      </div>
    </div>
  );
};

export default Screen;
