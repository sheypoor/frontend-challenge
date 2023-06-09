import React from 'react'
import { Form, Row, Col, Button } from 'reactstrap'
import { useStepper } from 'src/@core/components/Stepper'

const AccountStep = () => {
  const stepper = useStepper()

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    stepper.next()
  }

  const handlePrevClick = () => {
    stepper.prev()
  }
  return (
    <>
      <p>account</p>
      <Form className='py-4' onSubmit={handleSubmitForm}>
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
