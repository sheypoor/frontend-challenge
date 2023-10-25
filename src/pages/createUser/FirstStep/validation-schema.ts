import { string, object, number } from 'yup';

export const formValidator = () =>
    object().shape({
        name: string().required('name is required!'),
        age: number().required('age is required!'),
    });
