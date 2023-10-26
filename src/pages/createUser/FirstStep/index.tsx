import React from 'react'
import createUserStyles from '../CreateUser.module.scss'
import Wizard from 'src/components/app/Wizard'
import Input from 'src/components/kit/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import FormFieldWrapper from 'src/components/kit/FormFieldWrapper'
import { formSteps } from '../constants/form-steps'
import { formValidator } from './validation-schema'
import { Controller, useForm } from 'react-hook-form'
import { IFData } from '../context/types'
import Button from 'src/components/kit/Button'
import { useCreateUserContext } from '../hooks'
import { FORM_STEP } from '../context/enums'
import { useNavigate } from 'react-router-dom'
import { ROUTE_CONSTANTS } from 'src/Routes/constants/route-constants'

const StepComponent: React.FC = () => {
    const { setFirstStepData, firstStepData, setFormStep } = useCreateUserContext()
    const navigate = useNavigate()

    const { control, formState: { errors }, handleSubmit } = useForm<IFData>({
        defaultValues: { name: firstStepData?.name || '', age: firstStepData?.age },
        mode: 'all',
        resolver: yupResolver(formValidator()),
    });

    const onSubmit = (value: IFData) => {
        setFormStep(FORM_STEP.SECOND_STEP)
        setFirstStepData(value)
        navigate(ROUTE_CONSTANTS.CREATE_USER_FLOW.SECOND_STEP.ABSOLUTE)
    }

    return (
        <Wizard steps={formSteps} currentStep={formSteps['FIRST_STEP']}>
            <form className={createUserStyles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                <FormFieldWrapper>
                    <label>Name</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <>
                                <Input onChange={field.onChange} value={field.value} />
                                {errors?.name?.message && (
                                    <span className='form-error-text'>
                                        {errors?.name?.message.toString()}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <label>Age</label>
                    <Controller
                        name="age"
                        control={control}
                        render={({ field }) => (
                            <>
                                <Input
                                    onChange={field.onChange}
                                    value={field.value || ''}
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    type='number'
                                />
                                {errors?.age?.message && (
                                    <span className='form-error-text'>
                                        {errors?.age?.message.toString()}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </FormFieldWrapper>
                <div className={createUserStyles.formAction}>
                    <Button style={{ padding: '8px 18px' }} onClick={handleSubmit(onSubmit)}>
                        Next
                    </Button>
                </div>
            </form>
        </Wizard>
    )
}

export default StepComponent