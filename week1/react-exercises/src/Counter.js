import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "Higher than 10!" : "Keep Counting";

  function incrementHandler() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <Count count={feedback} />
      <Button clicked={incrementHandler} />
    </div>
  );
};

const Count = ({ count }) => {
  return <p>{count}</p>;
};

const Button = ({ clicked }) => {
  return <button onClick={clicked}>Add 1</button>;
};

export default Counter;
