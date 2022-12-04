import { Input } from '@material-tailwind/react'
import React from 'react'

const Step1 = ({ register }) => {
  return (
    <div className="flex flex-col gap-3">
      <Input
        {...register('name')}
        variant="standard"
        label="نام و نام‌خانوادگی"
      />
      <Input
        {...register('age')}
        variant="standard"
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
