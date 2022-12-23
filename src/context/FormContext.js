import { useState, createContext, useMemo } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const value = useMemo(() => {
    return {
      activeStep,
      setActiveStep,
    };
  }, [activeStep]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { FormProvider, FormContext };
