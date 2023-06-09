import React from 'react'
import { Form, Label, Input, FormFeedback, Row, Col, Button } from 'reactstrap'
import { useStepper } from 'src/@core/components/Stepper'
import { Controller, useForm } from 'react-hook-form'

const UserInfo = () => {
  const stepper = useStepper()
  const defaultValue = stepper.getValues()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: '', age: '', ...defaultValue } })

  const handleSubmitForm = (data: object) => {
    stepper.setValue(data)
    stepper.next()
  }
  return (
    <>
      <Form className='py-4' onSubmit={handleSubmit(handleSubmitForm)}>
        <Row className='justify-content-center pb-5'>
          <Col xs={11} lg={6}>
            <div className=''>
              <Label className='' for='name'>
                Name
              </Label>
              <Controller
                name='name'
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Input
                    type='text'
                    id='name'
                    placeholder='shahab rishehri'
                    autoFocus
                    invalid={errors.name && true}
                    {...field}
                  />
                )}
              />
              {errors.name ? <FormFeedback>Name is required</FormFeedback> : null}
            </div>

            <div className='mt-4'>
              <Label className='' for='age'>
                Age
              </Label>
              <Controller
                name='age'
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Input type='number' id='age' placeholder='24' invalid={errors.age && true} {...field} />
                )}
              />
              {errors.age ? <FormFeedback>Age is required</FormFeedback> : null}
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={11} lg={6}>
            <div className='d-flex align-items-center justify-content-center pb-3 pt-3'>
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

export default UserInfo
