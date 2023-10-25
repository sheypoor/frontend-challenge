import { string, object } from 'yup';
import { NEWS_LETTER } from '../context/enums';

export const formValidator = () =>
    object().shape({
        email: string().email().required('email is required!'),
        newsletter: string()
            .oneOf(Object.values(NEWS_LETTER), 'News letter is required!')
            .required('News letter is required!'),
    });
