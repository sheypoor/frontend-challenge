import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUser } from '~/components/sdk';

import { Card } from '~/components';
import FormStepper from '~/components/FormSteper';
import StepOne from './stepOne';
import StepTwo from './stepTwo';

const steps = [
  { index: 0, label: 'Personal Info', component: <StepOne /> },
  { index: 1, label: 'Additional Settings', component: <StepTwo /> },
];
const defaultValues = {
  name: '',
  age: '',
  email: '',
  newsletter: '',
};

const schema = yup
  .object({
    name: yup.string().required(),
    age: yup.string().required(),
    email: yup.string().email().required(),
    newsletter: yup.string().required(),
    // yup.mixed.oneOf(['daily', 'weekly', 'monthly']),
  })
  .required();

const Form = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    createUser(data).then((res) => console.log(res));
  };

  return (
    <Card sx={{ my: 9, p: 5, border: '1px solid #e6e6e6' }} elevation={0}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormStepper steps={steps} />
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
