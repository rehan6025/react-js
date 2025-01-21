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
      <div>test</div>
    </>
  )
}

export default App
