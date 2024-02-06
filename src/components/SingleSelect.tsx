import React from 'react';
import { Select } from 'antd';
import { Option } from '../interfaces';

type SingleSelectProps = {
  placeholder : string,
  id:string,
  options : any,
  onChange : (selectedData : Option[]) => void
}



const SingleSelect: React.FC<SingleSelectProps> = ({placeholder,id, onChange,options}) => {
   
    const optionTypeDatas = options?.map((option : any)  => ({value : option._id? option._id : option  , label : option.name ? option.name : option }))

return (
    <Select
      allowClear
      id={id}
      className="py-[20px] rounded-[4px] px-[10px] border-[1px] border-solid border-stroke w-full text-base text-gray350 font-normal"
      placeholder={placeholder}
      onChange={onChange}
      options={optionTypeDatas}
    />
)
  
};

export default SingleSelect