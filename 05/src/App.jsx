import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [length, setLength] = useState(8)

  return (
    <>
      <div className='bg-slate-800 text-white w-full h-screen flex justify-center items-center flex-col'>
        <h1 className='font-bold text-2xl '>Password generator</h1>
          <div>
            <input 
            type="text"
            value={password}
            placeholder='password'
            readOnly
            className='border border-black rounded-2xl px-2 py-1 text-center text-black'
            />
            <button className='bg-blue-600 font-bold px-2 py-1 rounded-lg mx-2 hover:bg-blue-500 text-white'>copy</button>
          </div>
          <div>
            <input 
            type="range"
            value={length}
            min={6}
            max={12}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input 
            type="checkbox"
            value={number}
            className='cursor-pointer'
            onChange={() => {setNumber((prev)=>!prev)}}
            />
            <label>Number</label>
          </div>
          <div>
            <input 
            type="checkbox"
            value={character}
            className='cursor-pointer'
            onChange={() => {setCharacter((prev)=>!prev)}}
            />
            <label>Character</label>
          </div>

      </div>
    </>
  )
}

export default App
