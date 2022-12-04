import { Input } from '@material-tailwind/react'
import React from 'react'

const Step1 = ({ register }) => {
  return (
    <div className="flex flex-col gap-3">
      <Input
        variant="standard"
        {...register('name')}
        autoComplete="name"
        label="نام و نام‌خانوادگی"
      />
      <Input
        variant="standard"
        autoComplete="off"
        {...register('age')}
        label="سن"
        type="number"
        min={10}
        max={90}
        required
        maxLength={2}
      />
    </div>
  )
}

export default Step1
