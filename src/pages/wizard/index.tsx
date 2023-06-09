import React from 'react'
import { Row, Col, Card } from 'reactstrap'

function Wizard() {
  return (
    <div className='pt-5'>
      <Row className='justify-content-center m-0 h-100'>
        <Col xs={12} lg={6}>
          <Card>
            <h2 className='text-center mt-4 mb-1 fw-bolder'>Create Account</h2>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Wizard