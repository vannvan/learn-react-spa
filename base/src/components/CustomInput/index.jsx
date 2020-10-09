import React from 'react'

export interface CustomInputProps {
  value: string;
  //可以看出 onChange是一个普通的函数,也被定义到了组件的props里面了
  onChange: ((value: string,event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export default function(props: CustomInputProps) {
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // props.onChange是一个属性，也是自定义的一个事件
    props.onChange && props.onChange(e.target.value, e)
  }

  return (
    <input value={props.value} onChange={handleChange}></input>
  )
}
