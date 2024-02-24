import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { EvenSelector, countAtom } from "./store/atom/count";


function App() {
console.log('main')
  return (
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  );
}

function Count(){
  console.log('count')
  return (
    <div>
      <CountRender/>
      <br/>
      <EvencountRender/>
      <br />
      <Buttons/>
    </div>
  )
}

function EvencountRender(){
  const isEven = useRecoilValue(EvenSelector);

  if(!isEven){
    return <div>it is even</div>
  }else{
    null
  }
}

function CountRender(){
  const count=useRecoilValue(countAtom);
  return (
    <div>
      the count is {count}
    </div>
  )
}

function Buttons() {
   const setcount= useSetRecoilState(countAtom);
  return (
    <div>
     <button onClick={()=>{
      setcount(c=>c+1)
     }}>increase</button>
     <button onClick={()=>{
      setcount(c=>c-1)
     }}>decrease</button>
    </div>
  );
}

export default App;
