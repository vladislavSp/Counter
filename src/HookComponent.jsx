import React, { useState } from "react";

export const HookComponent = () => {
  const [count, setCount] = useState(0);
  const [maxCount] = useState(10);
  const [minCount] = useState(0);

  const increment = () => {
    if (count + 1 > maxCount) return;
    else setCount(count + 1);
  }

  const decrement = () => {
    if (count - 1 < minCount) return
    else setCount(count - 1);
  }

  const onInput = (evt) => {
    let value = parseInt(evt.target.value);
    console.log(evt.target.value, value);
    if (value) {
      evt.target.value = value;
      setCount(evt.target.value);
    }
  }

  const onFocus = (evt) => {
    console.log(evt);
  }

  return <div>
    <button onClick={decrement}>- Dec</button>
    <input className=""
      value={count}
      minLength={minCount}
      maxLength={maxCount}
      onChange={e => setCount(e.target.value)}
      onInput={onInput}
      onFocus={onFocus}
    />
    <button onClick={increment}>+ Inc</button>
  </div>;
}