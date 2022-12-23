import { useContext } from 'react';
import { FormContext } from '~/context/FormContext';
import { Stepper, Step, StepLabel } from '~/components';

const FormStepper = ({ steps }) => {
  const { activeStep } = useContext(FormContext);
  return (
    <Stepper activeStep={activeStep}>
      {steps.map(({ label }) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default FormStepper;
