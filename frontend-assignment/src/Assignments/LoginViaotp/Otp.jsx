import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate= useNavigate();

  const inputref={
    input1:useRef(null),
    input2:useRef(null),
    input3:useRef(null),
    input4:useRef(null)
  }

  const [inputotp, setInputotp] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  useEffect(()=>{
    inputref.input1.current.focus();
  },[])

  function handleChange(e){
    let id=e.target.id;
    const value= e.target.value;
    setInputotp({...inputotp,[id]:value})

    let newIndex=parseInt(id.slice(id.length-1,id.length))+1
    let newid= id.slice(0,id.length-1)+newIndex;
    
    if (value && newIndex<5) {
      inputref[newid].current.focus();
    }
    
  }

  function keydown(e){
    let id=e.target.id;
    let newindex= parseInt(id.slice(id.length-1,id.length))-1;
    if (e.key === 'Backspace' && newindex >= 0) {
      let newid = id.slice(0, id.length - 1) + newindex;
      if (inputotp[id]) {
        setInputotp({...inputotp, [id]: ''}); // Clear the current input value
      } else {
        inputref[newid].current.focus();
      }
    }
  }

  function handler(){
    navigate('../phone')
    console.log(inputotp)
  }

  return (
    <form
      className="w-[45%] h-[60%] flex flex-col justify-center items-center gap-6 bg-black rounded-xl transition-all duration-400"
      onSubmit={handler}
    >
      <h1 className="text-5xl text-white mb-8">Login via otp</h1>
      <div className="flex justify-center items-center h-16 w-[60%]">
        <input
        id="input1"
          className="text-center h-full w-[12%] rounded text-3xl m-2"
          type="text"
          maxLength={1}
          required={true}
          onChange={handleChange}
          ref={inputref.input1}
          onKeyDown={keydown}
        />
        <input
        id='input2'
          className="text-center h-full w-[12%] rounded text-3xl m-2"
          type="text"
          maxLength={1}
          required={true}
          onChange={handleChange}
          ref={inputref.input2}
          onKeyDown={keydown}
        />
        <input
        id='input3'
          className="text-center h-full w-[12%] rounded text-3xl m-2"
          type="text"
          maxLength={1}
          required={true}
          onChange={handleChange}
          ref={inputref.input3}
          onKeyDown={keydown}
        />
        <input
        id="input4"
          className="text-center h-full w-[12%] rounded text-3xl m-2"
          type="text"
          maxLength={1}
          required={true}
          onChange={handleChange}
          ref={inputref.input4}
          onKeyDown={keydown}
        />
      </div>
      <button
        className="bg-yellow-300 px-5 py-2 rounded active:bg-white text-lg"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Otp;
