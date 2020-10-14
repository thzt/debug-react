import React, { useState } from 'react';
import './App.css';

function App() {
  debugger;
  const [state, setState] = useState(0);
  debugger;

  const increment = () => {
    debugger;
    setState(s => {
      debugger;
      return s + 1;
    });
    debugger;
  };

  debugger;
  return <button onClick={increment}>{state}</button>;
}

export default App;
