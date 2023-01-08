import React from "react";
import { useCount } from "../hooks/useCount";
import "./counter.css";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCount(0);

  return (
    <div className="counter">
      <button onClick={increment}>increase</button>
      <div>count: {count}</div>
      <button onClick={decrement}>decrease</button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
};
