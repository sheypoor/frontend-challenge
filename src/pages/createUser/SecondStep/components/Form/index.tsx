import React from 'react'
import createUserStyles from '../../../CreateUser.module.scss'
import FormFieldWrapper from 'src/components/kit/FormFieldWrapper'
import { yupResolver } from '@hookform/resolvers/yup'
import { formValidator } from './validation-schema'
import { Controller, useForm } from 'react-hook-form'
import { ISData } from 'src/pages/CreateUser/context/types'
import Input from 'src/components/kit/Input'
import Select from 'src/components/kit/Select'
import { newsLetterOptions } from './constants'
import Button from 'src/components/kit/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_CONSTANTS } from 'src/Routes/constants/route-constants'

interface IFProps {
    onSubmit: (data: ISData) => void;
    loading: boolean;
}
const Form: React.FC<IFProps> = ({ onSubmit, loading }) => {
    const navigate = useNavigate()

    const { control, formState: { errors }, handleSubmit } = useForm<ISData>({
        defaultValues: { email: '', newsletter: undefined },
        mode: 'all',
        resolver: yupResolver(formValidator()),
    });

    return (
        <form className={createUserStyles.form} noValidate onSubmit={handleSubmit(onSubmit)} >
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
                                placeholder='Choose News Letter'
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
                <Button
                    style={{ padding: '8px 18px', marginRight: '8px' }}
                    onClick={() => navigate(ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.ABSOLUTE)}
                >
                    Back
                </Button>
                <Button
                    style={{ padding: '8px 18px' }}
                    disabled={loading}
                    type='SUCCESS'
                    onClick={handleSubmit(onSubmit)}
                >
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default Form