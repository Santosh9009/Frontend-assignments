import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Phone = () => {
  const input= useRef();
  const navigate = useNavigate();
  const [number,setNumber]=useState('');

  function handler(){
    if(number.length==10){
      navigate('../otp')
    }else{
      alert('enter valid no')
    }
  }
  return (
    <form className='w-[45%] h-[60%] flex flex-col justify-center items-center gap-5 bg-black rounded-xl transition-all duration-400' onSubmit={handler}>
      <h1 className="text-5xl text-white mb-8">Login via otp</h1>
      <input className='bg-gray-200 p-3 rounded' ref={input} onChange={(e)=>setNumber(e.target.value)} required={true} minLength={10} type="text" placeholder='Enter the mobile number'/>
      <button className='bg-yellow-300 px-5 py-2 rounded active:bg-white text-lg' type='submit'>Send otp</button>
    </form>
  )
}

export default Phone