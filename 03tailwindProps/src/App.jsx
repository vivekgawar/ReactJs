import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black mb-6'>Tailwind Test</h1>
      <div class="relative h-[400px] w-[300px] rounded-md"></div>
    <Cards username='chaiAurcode'/>
    </>
  )
}

export default App
