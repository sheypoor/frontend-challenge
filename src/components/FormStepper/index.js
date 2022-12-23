import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '~/context/FormContext';
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  CircularProgress,
} from '~/components';

const FormStepper = ({ steps, loading, children }) => {
  const { activeStep, setActiveStep } = useContext(FormContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label }) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {children}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />

        {activeStep <= steps.length - 3 && (
          <Button onClick={handleNext}>Next</Button>
        )}
        {activeStep === steps.length - 2 && (
          <Button type="submit" variant="outlined">
            {loading ? <CircularProgress size={20} /> : 'Register'}
          </Button>
        )}
      </Box>
    </>
  );
};

FormStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.node,
};
export default FormStepper;
