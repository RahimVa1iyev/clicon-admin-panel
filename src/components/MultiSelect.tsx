import React from 'react';
import { Select } from 'antd';
import { Option } from '../interfaces';

type MultiSelectProp = {
  placeholder : string,
  options : any,
  onChange : (selectCategory : Option[]) => void
}


const MultiSelect: React.FC<MultiSelectProp> = ({placeholder, onChange,options}) =>{
  const optionTypeDatas = options?.map((option : any)  => ({value : option.value? option.value : option  , label : option.label ? option.label : option }))
  console.log('opt',options);
  
return(
  
    <Select
      mode="multiple"
      allowClear
      className="py-[8px] rounded-[4px] px-[10px] border-[1px] border-solid border-stroke w-full text-base text-gray350 font-normal"
      placeholder={placeholder}
      onChange={onChange}
      options={optionTypeDatas}
    />
  
);
}

export default MultiSelect;