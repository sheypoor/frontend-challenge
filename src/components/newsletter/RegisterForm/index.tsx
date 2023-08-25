import { useState } from 'react'
import { Box, StepLabel, Step, Stepper, Button, Card } from '@mui/material'
import * as Yup from 'yup'
import { FormikWizard } from 'formik-wizard-form'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import type { newsletterRegisterForm } from '~~/types/newsletter'
export default function App() {
  const initialValues: newsletterRegisterForm = {
    name: '',
    age: '',
    email: '',
    newsletter: '',
  }
  const [finalValues, setFinalValues] = useState({})
  const [finished, setFinished] = useState(false)
  return (
    <Card sx={{ mt: 5, p: 3 }}>
      <FormikWizard
        initialValues={initialValues}
        onSubmit={values => {
          setFinalValues(values)
          setFinished(true)
        }}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: StepOne,
            validationSchema: Yup.object().shape({
              name: Yup.string().required('name is required'),
              age: Yup.number().required('age is required'),
            }),
          },
          {
            component: StepTwo,
            validationSchema: Yup.object().shape({
              email: Yup.string()
                .email('Please enter valid email')
                .required('Email is required'),
              newsletter: Yup.string().required('newsletter is required'),
            }),
          },
        ]}
      >
        {({
          currentStepIndex,
          renderComponent,
          handlePrev,
          handleNext,
          isNextDisabled,
          isPrevDisabled,
        }) => {
          return (
            <>
              <Box sx={{ width: '100%', my: '1rem' }}>
                <Stepper activeStep={currentStepIndex}>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>Personal Details</StepLabel>
                  </Step>
                  <Step completed={finished}>
                    <StepLabel>Newsletter Details</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box my="2rem">{renderComponent()}</Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  disabled={isPrevDisabled}
                  type="primary"
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  disabled={isNextDisabled}
                  type="primary"
                  onClick={handleNext}
                >
                  {currentStepIndex === 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
              <Box>
                <pre>{JSON.stringify(finalValues, null, 2)}</pre>
              </Box>
            </>
          )
        }}
      </FormikWizard>
    </Card>
  )
}
