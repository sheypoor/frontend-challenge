import { Row, Col, Button } from 'reactstrap'
import { ReactComponent as CompleteIcon } from 'src/assets/svg/complete.svg'

const CompleteStep = () => {
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
            <Button className='w-100' type='button' outline color='primary'>
              Create New Account
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CompleteStep
