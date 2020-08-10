import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount("Test")
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
