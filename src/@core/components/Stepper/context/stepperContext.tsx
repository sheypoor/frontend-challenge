import React, { createContext, ReactNode } from 'react'

type ContextType = {
  next: () => void
  prev: () => void
}

const StepperContext = createContext<ContextType>({
  next: () => {},
  prev: () => {}
})

interface StepperProviderProps {
  children: ReactNode
  next: () => void
  prev: () => void
}

const StepperProvider: React.FC<StepperProviderProps> = ({ children, next, prev }) => {
  return <StepperContext.Provider value={{ next, prev }}>{children}</StepperContext.Provider>
}

export { StepperContext, StepperProvider }
