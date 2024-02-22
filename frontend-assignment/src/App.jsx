import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
function App() {
  const [count, setcount] = useState(300000);
  const divref= useRef();


  useEffect(() => {
    setTimeout(() => {
      divref.current.innerHTML="23";
    }, 5000);
  }, [])
  
 


  return (
    <div>
      hi my tax return is  <div ref={divref}>{count}</div>
    </div>
  );
}

export default App;
