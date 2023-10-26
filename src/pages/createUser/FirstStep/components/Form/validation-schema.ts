import { string, object, number } from 'yup';

export const formValidator = () =>
    object().shape({
        name: string().required('name is required!'),
        age: number().typeError('Amount must be a number').required('age is required!'),
    });
