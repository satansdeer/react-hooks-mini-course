import React from "react";
import {useCounter} from './useCounter'

function App() {
  const {count, increment, decrement} = useCounter()

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
