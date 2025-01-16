import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  

  let [count , setCount ]=useState(5)

  const addValue = () => {
    count = count + 1
    console.log("clicked" , count);
    setCount(count);
  }

  const removeValue = () => {
    if(count <= 0) return;
    count = count - 1;
    setCount( count );
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Count : {count}</h3>
      <button onClick={addValue}>Add count {count}</button>
      <button onClick={removeValue}>Remove count {count}</button>
    </>
  )
}

export default App
