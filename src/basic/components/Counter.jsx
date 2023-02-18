import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(count => count + 1);
          onClick(1);
        }}
      >
        Add +
      </button>
    </div>
  );
}
