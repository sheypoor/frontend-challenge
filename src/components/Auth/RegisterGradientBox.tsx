import React from 'react'

const RegisterGradientBox = ({ stepper }) => {
  return (
    <>
      <div className="gradient flex flex-1 items-center justify-center rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-600 to-blue-400">
        <span className="text-8xl text-white">{stepper.icon}</span>
      </div>
    </>
  )
}

export default RegisterGradientBox
