import React from 'react'
import Layout from 'components/layout'
import { Alert, Card, CardBody } from '@material-tailwind/react'
import RegisterForm from 'components/Auth/RegisterForm'
import RegisterGradientBox from 'components/Auth/RegisterGradientBox'
import { useForm } from 'react-hook-form'
import { FormData } from 'types/userTypes'
import { stepsData } from 'components/Auth/stepsData'
import { createUser } from '../../sdk'

const Register = () => {
  const [step, setStep] = React.useState<'step1' | 'step2'>('step1')
  const { register, handleSubmit, control } = useForm<FormData>()
  const [show, setShow] = React.useState(false)

  const stepData = stepsData({ register, control })

  const stepper = step === 'step1' ? stepData.step1 : stepData.step2

  const onSubmit = handleSubmit((data) => {
    if (step === 'step1') {
      setStep('step2')
    } else {
      createUser(data)
        .then((res) => {
          setShow(true)
          console.log({ res })
        })
        .catch((err) => console.error(err))
    }
  })

  return (
    <Layout>
      <Card>
        <CardBody>
          <div className="flex h-96 flex-col lg:flex-row">
            <RegisterForm
              stepper={stepper}
              onSubmit={onSubmit}
              show={show}
              setShow={setShow}
            />
            <RegisterGradientBox stepper={stepper} />
          </div>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default Register
