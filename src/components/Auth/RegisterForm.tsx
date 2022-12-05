import { Alert, Button, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const RegisterForm = ({ stepper, onSubmit, show, setShow }) => {
  return (
    <div className="flex flex-1 flex-col gap-2 text-center">
      <Typography className="text-sm text-blue-gray-500">
        شروع رایگان
      </Typography>
      <Typography variant="h1" className="text-3xl text-blue-gray-800">
        عضویت در شیپور من
      </Typography>
      <Typography className="mt-2 text-sm text-blue-gray-500">
        از پیش حساب کاربری دارید؟{' '}
        <Link href="/" className="text-blue-500">
          وارد شوید
        </Link>
      </Typography>
      <form
        onSubmit={onSubmit}
        className="m-auto mt-4 flex h-full w-[18rem] max-w-full flex-col justify-around"
      >
        <div className="flex flex-col gap-3">{stepper.components}</div>
        {!show ? (
          <Button type="submit">{stepper.button}</Button>
        ) : (
          <Button disabled color="green">
            ثبت‌نام شما با موفقیت انجام شد
          </Button>
        )}
      </form>
    </div>
  )
}

export default RegisterForm
