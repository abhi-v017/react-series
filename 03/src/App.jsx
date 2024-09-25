import { useState } from "react"


function App() {
  let [counter, setCounter] = useState(0)
  const addvalue = ()=>{
    if(counter < 10){
      setCounter(counter + 1)
    }
  }
  const removevalue = ()=>{
    if(counter>0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className="h-screen w-full bg-slate-700 text-white flex justify-center items-center flex-col gap-2">
        <h1>hello it is working</h1>
        <h3>counter value: {counter}</h3>
        <button onClick={addvalue}  className="bg-blue-800 px-2 py-1 rounded-full mx-2">click to increase</button>
        <button onClick={removevalue} className="bg-blue-800 px-2 py-1 rounded-full mx-2">click to decrease</button>
      </div>
    </>
  )
}

export default App
