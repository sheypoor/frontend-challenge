import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SignUpStepOne from './steps/signUpStepOne';
import SignUpStepTwo from './steps/signUpStepTwo';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['SignUpStepOne', 'SignUpStepTwo'];
}

const validationSchema = [
  // step 1 validation
  yup.object().shape({
    name: yup.string().required('name is required'),
    age: yup
      .number()
      .typeError('age must be a number')
      .positive()
      .integer()
      .min(18, 'too little')
      .required('age is required'),
  }),
  //step 2 validation
  yup.object().shape({
    email: yup
      .string()
      .email('enter valid email')
      .required('email is required'),
    newsletter: yup.string().required('newsletter is required'),
  }),
];

type FormValues = {
  name: string;
  age: number;
  email: string;
  newsletter: string;
};

const defaultValues = {
  name: '',
  age: 18,
  email: '',
  newsletter: '',
};

const renderFormSteps = (step: number) => {
  switch (step) {
    case 0:
      return <SignUpStepOne />;
    case 1:
      return <SignUpStepTwo />;
    default:
      return null;
  }
};

type Props = {onSubmit(formValues: FormValues): void};

const SignUpMultiStepForm: React.FC<Props> = ({onSubmit}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const currentStepValidation = validationSchema[activeStep];
  const formMethods = useForm<FormValues>({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentStepValidation),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    trigger,
    formState: {isSubmitting},
  } = formMethods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <FormProvider {...formMethods}>
            <form>
              <div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                ></Grid>
                {renderFormSteps(activeStep)}
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep === steps.length - 1
                        ? handleSubmit(onSubmit)
                        : handleNext
                    }
                    className={classes.button}
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <CircularProgress size={14} />}
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </div>
  );
};

export default SignUpMultiStepForm;
