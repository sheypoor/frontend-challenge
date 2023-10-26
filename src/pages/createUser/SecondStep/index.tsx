import React, { useLayoutEffect, useState } from 'react'
import styles from './SecondStep.module.scss'
import Wizard from 'src/components/app/Wizard'
import { formSteps } from '../constants/form-steps'
import { ISData } from '../context/types'
import { Navigate, useNavigate } from 'react-router-dom'
import { TOAST_STATUS, toast } from 'src/utils/toast'
import { createUser } from '../../../../sdk'
import { useCreateUserContext } from '../hooks'
import { IUser } from './types'
import Form from './components/Form'
import { FORM_STEP } from '../context/enums'
import { ROUTE_CONSTANTS } from 'src/Routes/constants/route-constants'

const StepComponent: React.FC = () => {
    const navigate = useNavigate()
    const { firstStepData } = useCreateUserContext()
    const [loading, setLoading] = useState<boolean>(false)
    const [formCompleted, setFormCompleted] = useState<boolean>(false)

    const onSubmit = async (value: ISData) => {
        if (!firstStepData) return

        setLoading(true)
        const tempData: IUser = { ...firstStepData, ...value }
        try {
            await createUser(tempData)
            setFormCompleted(true)
            toast.fire({
                icon: TOAST_STATUS.SUCCESS,
                title: 'User has been created successfully!',
            });
        } catch (error) {
            toast.fire({
                icon: TOAST_STATUS.ERROR,
                title: 'Error in creating user',
            });
        } finally {
            setLoading(false)
        }
    }

    const renderWizardBody = () => {
        if (formCompleted)
            return (
                <div className={styles.completeFormMessage}>
                    <span>Thanks for your submission.</span>
                </div>
            )
        else return <Form loading={loading} onSubmit={onSubmit} />
    }

    if (!firstStepData) return <Navigate to={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.ABSOLUTE} />

    return (
        <Wizard
            steps={formSteps}
            currentStep={formSteps[FORM_STEP.SECOND_STEP]}
            completed={formCompleted}
        >
            {renderWizardBody()}
        </Wizard>
    )
}

export default StepComponent