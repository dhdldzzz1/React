import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = ()  => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref', countRef.current);
  };
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('Var', countVar);
  };

  const printResult = () =>{
    console.log(`ref:${countRef.current}, var:${countVar}`);
  };


  return (
    <div className="App">
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={doRendering}>렌더링</button>
      <button onClick={increaseRef}>Ref증가</button>
      <button onClick={increaseVar}>Var증가</button>
      <button onClick={printResult}>Ref/Var출력</button>
    </div>
  );
}

export default App

