import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = number => {
    setCount(count => count + number);
  };
  return (
    <div>
      <p>
        Total Count: {count} {count > 10 ? '⭐️' : '💩'}
      </p>
      <Counter total={count} onClick={handleClick} />
      <Counter total={count} onClick={handleClick} />
    </div>
  );
}
