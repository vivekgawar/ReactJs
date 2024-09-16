import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap
       justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-3 shadow-xl bg-white px-3 py-2
        rounded-2xl">
          <button
          onClick={() => setColor('red')}
          className="outline-none px-4
          rounded-full text-white shadow-xl"
          style={{backgroundColor:"Red"}}
          >Red</button>
          <button
          onClick={() => setColor('Blue')}
          className="outline-none px-4
          rounded-full text-white shadow-xl"
          style={{backgroundColor:"Blue"}}
          >Blue</button>
          <button
          onClick={() => setColor('Green')}
          className="outline-none px-4
          rounded-full text-white shadow-xl"
          style={{backgroundColor:"Green"}}
          >Green</button>
          <button
          onClick={() => setColor('Yellow')}
          className="outline-none px-4
          rounded-full text-black shadow-xl"
          style={{backgroundColor:"Yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor('Pink')}
          className="outline-none px-4
          rounded-full text-black shadow-xl"
          style={{backgroundColor:"Pink"}}
          >Pink</button>
          <button
          onClick={() => setColor('Purple')}
          className="outline-none px-4
          rounded-full text-white shadow-xl"
          style={{backgroundColor:"Purple"}}
          >Purple</button>
          <button
          onClick={() => setColor('Olive')}
          className="outline-none px-4
          rounded-full text-white shadow-xl"
          style={{backgroundColor:"olive"}}
          >Olive</button>
        </div>  
       </div>
    </div>
  )
}

export default App
