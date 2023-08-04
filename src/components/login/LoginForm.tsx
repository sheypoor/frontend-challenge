import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import useLogin from '../../hooks/useLogin'
import Button from '@components/button/Button'
import profileStore from '../../store/profileStore'

interface LoginFormProps {
  onClose: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1)
  const { setUser } = profileStore()
  const { mutate, isLoading, isError, data } = useLogin()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number()
      .required('Age is required')
      .min(18, 'You should at least 18 years old'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    newsletter: Yup.string().required('Newsletter preference is required'),
  })

  const handleModalClose = () => {
    setStep(1)
    onClose()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        age: '',
        email: '',
        newsletter: 'daily',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        mutate(values, {
          onSuccess: data => {
            setUser(data)
            resetForm()
            handleModalClose()
          },
        })
      }}
    >
      {({ isSubmitting, errors, values }) => (
        <Form>
          <div className="min-h-[400px] max-h-[400px] flex flex-col justify-center gap-6 bg-white max-w-[400px] rounded-lg p-10">
            {step === 1 && (
              <>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className={`border p-2 rounded-md focus:outline-none`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  name="age"
                  type="number"
                  placeholder="Enter age"
                  className={`border p-2 rounded-md focus:outline-none`}
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500"
                />
                <Button
                  title={'Next'}
                  className={`flex justify-center ${
                    errors.name || errors.age || !errors
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  onClickAction={() => setStep(2)}
                  disabled={!values.name || !values.age}
                />
              </>
            )}
            {step === 2 && (
              <>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className={`border p-2 rounded-md focus:outline-none`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  as="select"
                  name="newsletter"
                  className={`border p-2 rounded-md focus:outline-none`}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </Field>
                <ErrorMessage
                  name="newsletter"
                  component="div"
                  className="text-red-500"
                />
                <Button
                  title={'Submit'}
                  className={`flex justify-center ${
                    !errors.email && !errors.newsletter
                      ? ''
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  onClickAction={() => {}}
                />
                <div
                  className="mx-auto cursor-pointer"
                  onClick={() => setStep(1)}
                >
                  back
                </div>
              </>
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
