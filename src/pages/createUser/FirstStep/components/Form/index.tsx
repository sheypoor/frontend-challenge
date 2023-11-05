import React from 'react'
import createUserStyles from '../../../CreateUser.module.scss'
import FormFieldWrapper from 'src/components/kit/FormFieldWrapper'
import { yupResolver } from '@hookform/resolvers/yup'
import { formValidator } from './validation-schema'
import { Controller, useForm } from 'react-hook-form'
import { IFData } from 'src/pages/CreateUser/context/types'
import Input from 'src/components/kit/Input'
import Button from 'src/components/kit/Button'
import { useCreateUserContext } from 'src/pages/CreateUser/hooks'

interface IFProps {
    onSubmit: (data: IFData) => void;
}
const Form: React.FC<IFProps> = ({ onSubmit }) => {
    const { firstStepData } = useCreateUserContext()

    const { control, formState: { errors }, handleSubmit } = useForm<IFData>({
        defaultValues: { name: firstStepData?.name || '', age: firstStepData?.age },
        mode: 'all',
        resolver: yupResolver(formValidator()),
    });

    return (
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
    )
}

export default Form