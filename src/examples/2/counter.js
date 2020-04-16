import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count => ++count);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={handleClick}>Inc</button>
    </div>
  );
}
