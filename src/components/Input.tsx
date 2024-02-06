import React from 'react'

type InputProps = {
    placeholder : string,
    id:string,
    name:string,
    type:string,
    handleChange : any
}

const Input = ({placeholder,id,name,type,handleChange} : InputProps) => {
  return (
    <>
      <input  
      type={type} 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      onChange={handleChange}
      className=" py-[8px] rounded-[4px] px-[10px] border-[1px] border-solid border-stroke w-full text-base text-gray350 font-normal"
       />

    </>
  )
}

export default Input