import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [length, setLength] = useState(8)
  const passwordref = useRef(null)
  const passwordgenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number)str +='1234567890'
    if(character)str +='`~!@#$%^&*(){}[]>_<'
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, number, character, setPassword])

  const copypassword = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,12);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
  passwordgenerator()
  }, [length, number, character, passwordgenerator])
  

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
            ref={passwordref}
            />
            <button onClick={copypassword} className='bg-blue-600 font-bold px-2 py-1 rounded-lg mx-2 hover:bg-blue-500 text-white'>copy</button>
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
