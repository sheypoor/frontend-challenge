import { UseFormReturn } from "react-hook-form";
import { createUser } from 'sdk'
import { RegisterAndLoginFormModel } from "./register-and-login";
import { Toaster } from "../../components/notices/toaster";
import UserModel from "../../models/user";
import { DataOfStore } from "../../models/store";

export const onFormSubmit = (
    data: {
        reactHookFormObject: UseFormReturn<RegisterAndLoginFormModel>;
        defaultValue: RegisterAndLoginFormModel
    },
    onValidCallback: (
        data: RegisterAndLoginFormModel,
        onSuccessCallback: (data: DataOfStore) => void,
        onErrorCallback: () => void
    ) => void,
    onInValidCallback: () => void,
    onSuccessCallback: (data: DataOfStore) => void,
    onErrorCallback: () => void
) => {
    data.reactHookFormObject.handleSubmit(
        (data: RegisterAndLoginFormModel) => onValidCallback(data, onSuccessCallback, onErrorCallback),
        () => onInValidCallback()
    )()
}

export const onValidForm = (
    data: RegisterAndLoginFormModel,
    onSuccessCallback: (data: DataOfStore) => void,
    onErrorCallback: () => void
) => {
    const user: UserModel = { ...data, newsletter: data.newsletter?.value!, age: Number(data.age) }
    sendRequest(user, onSuccessCallback, onErrorCallback)
}

export const onInValidForm = () => {
    Toaster.error('Please check form and try again', { toastId: 'invalid-data' })
}

const sendRequest = async (
    data: UserModel,
    onSuccess: (data: DataOfStore) => void,
    onError: () => void,
) => {
    try {
        const res = await createUser(data);
        onSuccess(res)
    } catch (error) {
        onError()
    }
}