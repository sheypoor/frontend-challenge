import { Row, Col, Button } from 'reactstrap'
import { ReactComponent as CompleteIcon } from 'src/assets/svg/complete.svg'
import { useStepper } from 'src/@core/components/Stepper'

const CompleteStep = () => {
  const stepper = useStepper()

  const handleResetClick = () => {
    stepper.resetValues()
    stepper.setStep(0)
  }
  return (
    <div className='py-4'>
      <Row className='justify-content-center'>
        <Col xs={11} lg={5}>
          <CompleteIcon />
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={11} lg={5}>
          <div className='text-center'>
            <Button className='w-100' type='button' outline color='primary' onClick={handleResetClick}>
              Create New Account
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CompleteStep
