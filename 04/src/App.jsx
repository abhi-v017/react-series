import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor:color}}>
        <div className='bg-white px-4 py-2 mx-2 rounded-lg fixed flex justify-center items-center inset-x-0 bottom-12'>
          <button className='bg-red-700 px-2 py-1 font-bold rounded-full border border-black mx-2' onClick={()=>{setColor('red')}}>
            red
          </button>
          <button className='bg-green-700 px-2 py-1 font-bold rounded-full border border-black mx-2' onClick={()=>{setColor('green')}}>
            green
          </button>
          <button className='bg-black px-2 py-1 font-bold rounded-full border border-black mx-2 text-white' onClick={()=>{setColor('black')}}>
            black
          </button>
          <button className='bg-white px-2 py-1 font-bold rounded-full border border-black mx-2' onClick={()=>{setColor('white')}}>
            white
          </button>
          <button className='bg-yellow-400 px-2 py-1 font-bold rounded-full border border-black mx-2' onClick={()=>{setColor('yellow')}}>
            yellow
          </button>
        </div>

      </div>
    </>
  )
}

export default App
