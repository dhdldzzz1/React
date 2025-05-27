import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);

  const renderCount = useRef(1);
  useEffect(()=>{
    console.log("렌더링02", renderCount.current);
    renderCount.current = renderCount.current + 1;
  });


  return (
    <div className="App">
      <p>Count : {count}</p>
      <button onClick={() => setCount(count +1)}>Count증가</button>
    </div>
  );
}

export default App

import { useRef, useEffect } from 'react'
import './App.css'


function App() {
  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.value = '';
    inputRef.current.focus();
  }


  return (
    <div className="App">
      <input type='text' placeholder='아이디' ref={inputRef}/>
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
