import React from 'react';
const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, timesClicked, onInputNumber }) => {
    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <br />
          <p>Time the increment/decrement buttons have been clicked: {timesClicked}</p>
          <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/><button onClick=
          {onInputNumber}>Change Count Number</button>
        </div>
      </div>
    );
}
export default Counter;