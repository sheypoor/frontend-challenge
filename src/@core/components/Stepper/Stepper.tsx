import { StepperProvider } from './context/stepperContext'
import React, { useState } from 'react'

type Step = {
  title: string
  content: React.ReactNode
}

type StepperProps = {
  steps: Step[]
  defaultValue?: object
}

const Stepper = (props: StepperProps) => {
  const { steps, defaultValue = {} } = props
  const [activeStep, setActiveStep] = useState<number>(0)

  const next = (): void => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const prev = (): void => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleNavClick = (index: number) => {
    if (index <= activeStep) setActiveStep(index)
  }

  return (
    <StepperProvider defaultValue={defaultValue} next={next} prev={prev}>
      <div className='stepper'>
        <ul className='stepper__nav'>
          {steps.map((step, index) => (
            <li
              key={index}
              className={`stepper__nav--item ${index <= activeStep ? 'active' : ''} ${
                index < activeStep ? 'complete' : ''
              }`}
              onClick={() => handleNavClick(index)}
            >
              <span>{index + 1}</span>
              <p>{step.title}</p>
            </li>
          ))}
        </ul>
        <div className='stepper__content'>{steps[activeStep].content}</div>
      </div>
    </StepperProvider>
  )
}

export default Stepper
