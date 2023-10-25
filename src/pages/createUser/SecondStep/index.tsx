import React, { useState } from 'react'
import createUserStyles from '../CreateUser.module.scss'
import Wizard from 'src/components/app/Wizard'
import Input from 'src/components/kit/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import FormFieldWrapper from 'src/components/kit/FormFieldWrapper'
import { formSteps } from '../constants/form-steps'
import { formValidator } from './validation-schema'
import { Controller, useForm } from 'react-hook-form'
import { ISData } from '../context/types'
import Button from 'src/components/kit/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_CONSTANTS } from 'src/Routes/constants/route-constants'
import Select from 'src/components/kit/Select'
import { newsLetterOptions } from './constants'
import { TOAST_STATUS, toast } from 'src/utils/toast'
import { createUser } from '../../../../sdk'

const StepComponent: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

    const { control, formState: { errors }, handleSubmit } = useForm<ISData>({
        defaultValues: { email: '', newsletter: undefined },
        mode: 'all',
        resolver: yupResolver(formValidator()),
    });

    const onSubmit = async (value: ISData) => {
        setLoading(true)
        try{
            // await createUser()
            toast.fire({
                icon: TOAST_STATUS.SUCCESS,
                title: 'User has been created successfully!',
            });
        }catch(error) {
            toast.fire({
                icon: TOAST_STATUS.ERROR,
                title: 'Error in creating user',
            });
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className={createUserStyles.container}>
            <h4>Create Your Account</h4>
            <Wizard
                steps={formSteps}
                currentStep={formSteps['SECOND_STEP']}
            >
                <form className={createUserStyles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                    <FormFieldWrapper>
                        <label>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <Input onChange={field.onChange} value={field.value} />
                                    {errors?.email?.message && (
                                        <span className='form-error-text'>
                                            {errors?.email?.message.toString()}
                                        </span>
                                    )}
                                </>
                            )}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper>
                        <label>News Letter</label>
                        <Controller
                            name="newsletter"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <Select 
                                        options={newsLetterOptions}
                                        onChange={field.onChange}
                                        value={field.value}
                                    />
                                    {errors?.newsletter?.message && (
                                        <span className='form-error-text'>
                                            {errors?.newsletter?.message.toString()}
                                        </span>
                                    )}
                                </>
                            )}
                        />
                    </FormFieldWrapper>
                    <div className={createUserStyles.formAction}>
                        <Button style={{ padding: '8px 18px', marginRight: '8px' }} onClick={() => navigate(ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.ABSOLUTE)}>
                            Back
                        </Button>
                        <Button disabled={loading} style={{ padding: '8px 18px' }} onClick={handleSubmit(onSubmit)}>
                            Submit
                        </Button>
                    </div>
                </form>
            </Wizard>
        </div>
    )
}

export default StepComponent