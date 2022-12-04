import { Input, Option, Select } from '@material-tailwind/react'
import React from 'react'
import { Controller } from 'react-hook-form'

const Step2 = ({ control, register }) => {
  return (
    <div className="flex flex-col gap-3">
      <Input
        {...register('email')}
        variant="standard"
        label="رایانامه"
        type="email"
      />
      <Controller
        name="newsletter"
        control={control}
        render={({ field }) => (
          <Select variant="standard" label="خبرنامه" {...field}>
            <Option value="daily">روزانه</Option>
            <Option value="weekly">هفتگی</Option>
            <Option value="monthly">ماهانه</Option>
          </Select>
        )}
      />
    </div>
  )
}

export default Step2
