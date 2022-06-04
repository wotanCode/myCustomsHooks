import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => 
    setCounter(counter + 1);

  const decrement = (factor = 1) =>
    setCounter(counter - factor);

  const reset = () => setCounter(initialValue);

  return { counter, increment, decrement, reset };
}