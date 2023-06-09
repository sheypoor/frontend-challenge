import { Controller, useForm } from 'react-hook-form'
import { Form, Label, Input, FormFeedback, Row, Col, Button } from 'reactstrap'
import { useStepper } from 'src/@core/components/Stepper'
import { EMAIL_REGEX } from 'src/constants'
import Select from 'react-select'

const newLetters = [
  { value: 'daily', label: 'daily' },
  { value: 'weekly', label: 'weekly' },
  { value: 'monthly', label: 'monthly' }
]

const AccountStep = () => {
  const stepper = useStepper()

  const defaultValue = {
    email: '',
    newsletter: ''
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: defaultValue })

  const handleSubmitForm = (data: any) => {
    stepper.next()
  }

  const handlePrevClick = () => {
    stepper.prev()
  }

  return (
    <>
      <Form className='py-4' onSubmit={handleSubmit(handleSubmitForm)}>
        <Row className='justify-content-center pb-5'>
          <Col xs={11} lg={6}>
            <div className=''>
              <Label className='' for='name'>
                Email
              </Label>
              <Controller
                name='email'
                rules={{ required: true, pattern: EMAIL_REGEX }}
                control={control}
                render={({ field }) => (
                  <Input
                    type='text'
                    id='email'
                    placeholder='example@gmail.com'
                    autoFocus
                    invalid={errors.email && true}
                    {...field}
                  />
                )}
              />
              {errors.email ? <FormFeedback>Email is required</FormFeedback> : null}
            </div>

            <div className='mt-3'>
              <Label className='' for='age'>
                NewsLetter
              </Label>
              <Controller
                name='newsletter'
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <Select
                    id='newsletter'
                    options={newLetters}
                    value={newLetters.find(c => c.value === value)}
                    name={name}
                    onChange={selectedOption => {
                      onChange(selectedOption?.value)
                    }}
                  />
                )}
              />
              {errors.newsletter ? <FormFeedback>Age is required</FormFeedback> : null}
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={11} lg={6}>
            <div className='d-flex align-items-center justify-content-center pb-3 pt-3'>
              <Button className='me-2 w-50' outline type='button' color='secondary' onClick={handlePrevClick}>
                PREV
              </Button>
              <Button className='w-100' type='submit' color='primary'>
                NEXT
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default AccountStep
