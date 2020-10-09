import React, { useState } from 'react'

import CustomInput from '@/components/CustomInput'

export default function() {
 const [value, setValue] =  useState('')

 function handleChange(value: string) {
   console.log(value);
   setValue(value)
 }

  return (
    <div>
      <CustomInput value={value} onChange={handleChange}></CustomInput>
    </div>
  )
}
