import { useNavigate } from "react-router-dom";
import "./App.css";
import { useContext, useState } from "react";
import { CountContext } from "./context";


function App() {
  const [count, setcount]=useState(0);

  return (
    <CountContext.Provider value={{count,setcount}}>
      <Count count={count} setcount={setcount}/>
    </CountContext.Provider>
  );
}

function Count({count}){
  return (
    <div>
      <div>the count is {count}</div>
      <br />
      <Buttons count={count}/>
    </div>
  )
}
function Buttons() {

   const context= useContext(CountContext);
  return (
    <div>
     <button onClick={()=>{
      context.setcount(context.count+1)
     }}>increase</button>
     <button onClick={()=>{
      context.setcount(context.count-1)
     }}>decrease</button>
    </div>
  );
}

export default App;
