import { ReactNode } from "react"

export type ContextType = {
    next: () => void
    prev: () => void
    setValue: (data: object) => void
    getValues: () => object
    setStep: (step: number) => void
    resetValues: () => void
  }
  

  export interface StepperProviderProps {
    children: ReactNode
    defaultValue?: object
    next: () => void
    prev: () => void
    setStep: (step: number) => void
  }