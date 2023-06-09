import React, { createContext, ReactNode, useRef } from 'react'

type ContextType = {
  next: () => void
  prev: () => void
  setValue: (data: object) => void
  getValues: () => object
  setStep: (step: number) => void
  resetValues: () => void
}

const StepperContext = createContext<ContextType>({
  next: () => {},
  prev: () => {},
  setValue: () => {},
  getValues: (): object => ({}),
  setStep: () => {},
  resetValues: () => {}
})

interface StepperProviderProps {
  children: ReactNode
  defaultValue?: object
  next: () => void
  prev: () => void
  setStep: (step: number) => void
}

const StepperProvider: React.FC<StepperProviderProps> = ({ children, defaultValue, next, prev, setStep }) => {
  const contentRef = useRef<object | null>({ ...defaultValue })

  const setValue = (data: object): void => {
    contentRef.current = { ...contentRef.current, ...data }
  }

  const getValues = (): object => {
    const data = contentRef.current ?? {}
    return data
  }

  const resetValues = (): void => {
    contentRef.current = { ...defaultValue }
  }

  return (
    <StepperContext.Provider value={{ next, prev, getValues, setValue, setStep, resetValues }}>
      {children}
    </StepperContext.Provider>
  )
}

export { StepperContext, StepperProvider }
