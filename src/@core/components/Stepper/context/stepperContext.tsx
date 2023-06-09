import React, { createContext, ReactNode, useRef } from 'react'

type ContextType = {
  next: () => void
  prev: () => void
  setValue: (data: object) => void
  getValues: () => object
}

const StepperContext = createContext<ContextType>({
  next: () => {},
  prev: () => {},
  setValue: () => {},
  getValues: (): object => ({})
})

interface StepperProviderProps {
  children: ReactNode
  defaultValue?: object
  next: () => void
  prev: () => void
}

const StepperProvider: React.FC<StepperProviderProps> = ({ children, defaultValue, next, prev }) => {
  const contentRef = useRef<object | null>({ ...defaultValue })

  const setValue = (data: object): void => {
    contentRef.current = { ...contentRef.current, ...data }
  }

  const getValues = (): object => {
    const data = contentRef.current ?? {}
    return data
  }

  return <StepperContext.Provider value={{ next, prev, getValues, setValue }}>{children}</StepperContext.Provider>
}

export { StepperContext, StepperProvider }
