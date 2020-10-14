import React, { useState } from 'react';
import './App.css';

// class App extends React.Component {
//   state = {
//     v: 0,
//   };

//   increment = () => {
//     debugger;
//     this.setState(s => {
//       debugger;
//       return {
//         v: s.v + 1,
//       };
//     });
//     debugger;
//     this.setState(s => {
//       debugger;
//       return {
//         v: s.v + 2,
//       };
//     });
//     debugger;
//   };

//   render = () => {
//     const {
//       increment,
//       state: { v },
//     } = this;

//     debugger;
//     return <button onClick={increment}>{v}</button>;
//   };
// }

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
    setState(s => {
      debugger;
      return s + 2;
    });
    debugger;
  };

  debugger;
  return <button onClick={increment}>{state}</button>;
}

export default App;
