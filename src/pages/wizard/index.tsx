import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import Stepper from 'src/@core/components/Stepper'

import UserInfo from './Steps/UserInfo'
import Account from './Steps/Account'
import Complete from './Steps/Complete'
import { User } from 'src/models/User'

const steps = [
  {
    title: 'Person',
    content: <UserInfo />
  },
  {
    title: 'Account',
    content: <Account />
  },
  {
    title: 'Complete',
    content: <Complete />
  }
]

const stepperDefaultValue: User = {
  name: '',
  age: 18,
  email: '',
  newsletter: 'daily'
}

function Wizard() {
  return (
    <div className='pt-5'>
      <Row className='justify-content-center m-0 h-100'>
        <Col xs={12} lg={6}>
          <Card>
            <h2 className='text-center mt-4 mb-1 fw-bolder'>Create Account</h2>
            <Stepper steps={steps} defaultValue={stepperDefaultValue} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Wizard
