
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count inside setInterval: ${count}`);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log('Cleanup performed');
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setShow(!show)}>Toggle Component</button>
    </div>
  );
}

export default App;
