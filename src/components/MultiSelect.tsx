import React from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { Option } from '../interfaces';

type MultiSelectProp = {
  placeholder : string,
  options : Option[],
  onChange : (selectCategory : Option[]) => void
}


const MultiSelect: React.FC<MultiSelectProp> = ({placeholder, onChange,options}) => (
    <Select
      mode="multiple"
      allowClear
      className="py-[8px] rounded-[4px] px-[10px] border-[1px] border-solid border-stroke w-full text-base text-gray350 font-normal"
      placeholder={placeholder}
      onChange={onChange}
      options={options}
    />
  
);

export default MultiSelect;