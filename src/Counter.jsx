import React from "react";

export const Counter = ({initValue, onChangeValue, minValue, maxValue, onInputChange, onFocusChange}) => {
  return <React.Fragment>
    <button className="btn__minus" name="minus" onClick={onChangeValue}>-</button>
    <input
      className="adder__input"
      type="text"
      pattern="[0-9]*"
      name="num"
      onChange={onChangeValue}
      onInput={onInputChange}
      onWheel={onFocusChange}
      min={minValue}
      max={maxValue}
      value={initValue}
    />
    <button className="btn__plus" name="plus" onClick={onChangeValue}>+</button>
  </React.Fragment>;
};
