import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button({title = "Get Started"}) {
  return (
    <div className='min-w-40 p-1 bg-zinc-100 text-black rounded-full'>
        <span style={{ marginLeft: 15 }} className='text-base px-1 py-1 font-semi-bold flex items-center gap-5'>{title}
        <BsArrowReturnRight/></span>   
    </div>
  )
}

export default Button