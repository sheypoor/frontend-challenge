import { useContext } from 'react'
import { StepperContext } from '../context/stepperContext'

export const useStepper = () => {
    const stepper = useContext(StepperContext);
    if (!stepper) {
      throw new Error('useStepper must be used within a StepperProvider');
    }
    return stepper;
  };

// export const useStepper = () => useContext(StepperContext)
