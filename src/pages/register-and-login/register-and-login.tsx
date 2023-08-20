import { FC, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import * as yup from "yup";
import styled from "@emotion/styled";
import NEWSLETTER from "../../enums/newsletter";
import Form from "../../components/form/form";
import StringInput from "../../components/form/elements/string-input";
import Button from "../../components/form/elements/button";
import { Toaster } from "../../components/notices/toaster";
import useStore from '../../state-management/store'
import { DataOfStore, Store } from "../../models/store";
import { onFormSubmit, onInValidForm, onValidForm } from "./form-actions";
import NumberInput from "../../components/form/elements/number-input";
import SelectInput from "../../components/form/elements/select";

export interface RegisterAndLoginFormModel {
    name: string
    age: number | ''
    email: string
    newsletter: { label: string, value: NEWSLETTER } | null
}

const newsletterOptions: Array<{ label: string, value: NEWSLETTER }> = [
    { label: NEWSLETTER.daily, value: NEWSLETTER.daily },
    { label: NEWSLETTER.weekly, value: NEWSLETTER.weekly },
    { label: NEWSLETTER.monthly, value: NEWSLETTER.monthly },
]

const RegisterAndLogin = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const login: (data: DataOfStore) => void = useStore<(data: DataOfStore) => void>((store: Store) => store.login)

    const formInitialValue: RegisterAndLoginFormModel = { name: '', age: '', email: '', newsletter: null }
    const LoginFormValidation = yup.object({
        name: yup
            .string()
            .required('field required'),
        email: yup
            .string()
            .required('field required')
            .email('invalid E-mail'),
        age: yup
            .number()
            .required('field required'),
        newsletter: yup
            .object()
            .required('field required'),
    }).required();

    const onSuccess = (data: DataOfStore) => {
        setLoading(false)
        login(data)
        Toaster.success(
            'You registered & logged in successfully',
            { toastId: 'valid-data' }
        )
    }

    const onError = () => {
        setLoading(false)
        Toaster.error('Please check form and try again', { toastId: 'invalid-data' })
    }

    return (
        <RegisterAndLoginWrapper>
            <Title>register and login</Title>
            <Form<RegisterAndLoginFormModel>
                formType='CREATE'
                defaultValue={formInitialValue}
                validation={LoginFormValidation}
                fieldsRenderer={(data: { reactHookFormObject: UseFormReturn<RegisterAndLoginFormModel>; defaultValue: RegisterAndLoginFormModel }) => {
                    return <FormWrapper>
                        <StringInput<RegisterAndLoginFormModel>
                            label={<Label title='name' />}
                            name='name'
                            data={data}
                        />
                        <StringInput<RegisterAndLoginFormModel>
                            label={<Label title='email' />}
                            name='email'
                            type='email'
                            data={data}
                        />
                        <NumberInput<RegisterAndLoginFormModel>
                            label={<Label title='age' />}
                            name='age'
                            data={data}
                        />
                        <SelectInput<RegisterAndLoginFormModel>
                            label={<Label title='newsletter' />}
                            name='newsletter'
                            options={newsletterOptions}
                            isClearable={true}
                            isMulti={false}
                            data={data}
                        />
                        <Button
                            title='Register And Login'
                            disable={!data.reactHookFormObject.formState.isValid || loading}
                            onClick={() => {
                                setLoading(true)
                                onFormSubmit(data, onValidForm, onInValidForm, onSuccess, onError)
                            }}
                        />
                    </FormWrapper>
                }}
            />
        </RegisterAndLoginWrapper>
    )
}

export default RegisterAndLogin

const Label: FC<{ title: string }> = ({ title }) => {
    return <>
        <span style={{ paddingRight: '3px' }}>{title}</span>
        <span style={{ color: 'red' }}>*</span>
    </>
}

const RegisterAndLoginWrapper = styled.div(() => ({
    width: '80%',
    height: 'max-content',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
}))

const Title = styled.h1(() => ({
    fontWeight: 900,
    fontSize: '35px',
    textTransform: 'capitalize',
}));

const FormWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '35%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px,'
}))
