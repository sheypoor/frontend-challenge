import { useState } from 'react'
import * as Yup from 'yup'
import { Box, StepLabel, Step, Stepper, Button, Card } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormikWizard } from 'formik-wizard-form'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import type { newsletterRegisterForm } from '~~/types/newsletter'
import useHttp from '~~/hooks/useHttp'
import { NEWSLETTER_PERIODS } from '~~/constants/newsletter'

export default function App() {
  const { newsletter } = useHttp()
  const initialValues: newsletterRegisterForm = {
    name: '',
    age: '',
    email: '',
    newsletter: '',
  }
  const steps = [
    {
      component: StepOne,
      validationSchema: Yup.object().shape({
        name: Yup.string().required('name is required'),
        age: Yup.number()
          .required('age is required')
          .max(150, 'You must be at most 150 years'),
      }),
    },
    {
      component: StepTwo,
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email('Please enter valid email')
          .required('Email is required'),
        newsletter: Yup.string()
          .required('newsletter is required')
          .oneOf(NEWSLETTER_PERIODS),
      }),
    },
  ]

  const [loading, setLoading] = useState(false)
  const [finalValues, setFinalValues] = useState({})
  const [finished, setFinished] = useState(false)
  const submitForm = values => {
    setLoading(true)
    newsletter
      .registerUserOnNewsletter(values)
      .then(res => {
        setFinalValues(res?.user)
        setFinished(true)
      })
      .catch(err => {
        // todo: handle Errors
        console.log('error', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <Card sx={{ mt: 5, p: 3 }}>
      <FormikWizard
        initialValues={initialValues}
        onSubmit={submitForm}
        validateOnNext
        activeStepIndex={0}
        steps={steps}
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
              <Box sx={{ my: 1 }}>
                <Stepper activeStep={currentStepIndex}>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>Personal Details</StepLabel>
                  </Step>
                  <Step completed={finished}>
                    <StepLabel>Newsletter Details</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box sx={{ my: 5 }}>{renderComponent()}</Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  disabled={isPrevDisabled}
                  type="primary"
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <LoadingButton
                  variant="contained"
                  disabled={isNextDisabled}
                  type="primary"
                  onClick={handleNext}
                  loading={loading}
                >
                  {currentStepIndex === 1 ? 'Finish' : 'Next'}
                </LoadingButton>
              </Box>
              {finished && (
                <Box sx={{ mt: 5 }}>
                  <pre>{JSON.stringify(finalValues, null, 2)}</pre>
                </Box>
              )}
            </>
          )
        }}
      </FormikWizard>
    </Card>
  )
}
