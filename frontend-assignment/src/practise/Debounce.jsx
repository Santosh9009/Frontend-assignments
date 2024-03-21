import { useState, useEffect } from "react";

function useDebounce(input,timeout){
  const [value ,setValue] = useState('')

  useEffect(()=>{

    const x = setTimeout(() => {
      setValue(input)
    }, timeout);

    return ()=>{
      clearTimeout(x);
    }
  },[input])

  return value;
}

const Debounce = () => {
  const [input, setInput]= useState('')
const debounceValue = useDebounce(input, 2000)
  return (
    <div className="flex justify-center items-center w-full h-screen">
    <div>{debounceValue}</div>
  <input type="text" className="border-4" placeholder="search" onChange={(e)=>setInput(e.target.value)}/>
  </div>
  )
}

export default Debounce