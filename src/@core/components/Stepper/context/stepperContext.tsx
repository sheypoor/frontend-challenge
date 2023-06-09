import React, { createContext, ReactNode } from 'react'

type ContextType = {}

const StepperContext = createContext<ContextType>({})

interface StepperProviderProps {
  children: ReactNode
}

const StepperProvider: React.FC<StepperProviderProps> = ({ children }) => {
  return <StepperContext.Provider value={{}}>{children}</StepperContext.Provider>
}

export { StepperContext, StepperProvider }
