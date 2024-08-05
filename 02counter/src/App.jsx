import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(52)
  // let counter = 10
  
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Pear dawar's weight counter!</h1>
    <h2>Weight: {counter} Kg</h2>
    <button
    onClick={addValue}>Junk Food</button>
    <br />
    <br />
    <button
    onClick={removeValue}>Gym</button>
    </>
  )
}

export default App 
