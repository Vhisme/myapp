import React, { useState } from "react";
import useCounter  from "./hook/useCounter";
import { Link } from "react-router-dom";
import "./index.css";

function Counters() {
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount((e.target.value));
  }

  function handleOnClick() {
    setValue(Number(newCount));
    setNewCount("");
  }

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p>{count}</p>
      <div className="btn-container">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
      <input value={newCount} type="number" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set count value</button>
      <p><Link to="/">back to our homepage</Link></p>
    </div>
  );
}

export default Counters;
