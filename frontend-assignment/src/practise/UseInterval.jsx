import { useState, useEffect } from "react";

function useInterval(fn, timeout){
  
  useEffect(()=>{

   const value =  setInterval(() => {
      fn();
    }, timeout);

    return ()=>{
      clearInterval(value);
    }

  },[timeout,fn])

}

const UseInterval = () => {
const [count , setCount] = useState(0);

useInterval(()=>{
  setCount(c=>c+1);
},2000)
  return (
    <div>{count}</div>
  )
}

export default UseInterval;