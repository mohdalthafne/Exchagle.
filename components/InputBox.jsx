"use client"
import React from 'react'

const InputBox = ({ type, value, onChange, placeHolder }) => {
  return (
    <>
     <input type={type} value={value} onChange={onChange} placeholder={placeHolder} className='w-full h-full outline-none pl-3 rounded-lg text-md sm:text-lg font-normal border-2 border-[#695cfe] bg-[#242526] custom-class' />
    </>
  )
}

export default InputBox