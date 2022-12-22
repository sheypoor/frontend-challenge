import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '~/components';
import FormStepper from '~/components/FormSteper';
import StepOne from './stepOne';
import StepTwo from './stepTwo';

const steps = [
  { index: 0, label: 'Personal Info', component: <StepOne /> },
  { index: 1, label: 'Additional Settings', component: <StepTwo /> },
];

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
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormStepper steps={steps} />
        <Button type="submit">ok</Button>
      </form>
    </FormProvider>
  );
};

export default Form;
