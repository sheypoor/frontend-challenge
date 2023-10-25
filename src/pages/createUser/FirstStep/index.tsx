import React from 'react'
import createUserStyles from '../CreateUser.module.scss'
import Wizard from 'src/components/app/Wizard'

const StepComponent: React.FC = () => {
    return (
        <div className={createUserStyles.container}>
            <h4>Create Your Account</h4>
            <Wizard
                footer={
                    <div>hello</div>
                }
            >
                hello
            </Wizard>
        </div>
    )
}

export default StepComponent