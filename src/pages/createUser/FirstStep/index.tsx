import React from 'react'
import Wizard from 'src/components/app/Wizard'
import { formSteps } from '../constants/form-steps'
import { IFData } from '../context/types'
import { useCreateUserContext } from '../hooks'
import { FORM_STEP } from '../context/enums'
import { useNavigate } from 'react-router-dom'
import { ROUTE_CONSTANTS } from 'src/Routes/constants/route-constants'
import Form from './components/Form'

const StepComponent: React.FC = () => {
    const { setFirstStepData, setFormStep } = useCreateUserContext()
    const navigate = useNavigate()

    const onSubmit = (value: IFData) => {
        setFormStep(FORM_STEP.SECOND_STEP)
        setFirstStepData(value)
        navigate(ROUTE_CONSTANTS.CREATE_USER_FLOW.SECOND_STEP.ABSOLUTE)
    }

    return (
        <Wizard steps={formSteps} currentStep={formSteps[FORM_STEP.FIRST_STEP]}>
           <Form onSubmit={onSubmit}/>
        </Wizard>
    )
}

export default StepComponent