
import React from 'react'
import { useState } from 'react';


export default function Button({label}) {
  const[changButton, setChageButton] = useState({label});
  
  function handleClick(){

   setChageButton("ahhhhhhhhhh")

  }
  return (
    <div className=' flex justify-center'>
      <button className=' rounded-lg bg-slate-500 text-center w-20 h-6 mt-3 ' onClick={handleClick}> {label} </button>
    </div>
  )
}