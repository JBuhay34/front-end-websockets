import React, { useEffect, useState } from "react";
import "./App.scss";

import AnimalCrossing from './AnimalCrossing.js';

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Mounting");

        return () => {
            console.log("unmounting");
        }
    }, []);

    const incrementing = () =>{
        setCount(count+1);
        console.log(count);
    }

  return (
    <div>
      <button onClick={incrementing}>Increment</button>
      <p>count: {count}</p>
      <AnimalCrossing />
    </div>
  );
}

export default App;
