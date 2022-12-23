import { useState, useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormContext } from '~/context/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUser } from '~/components/sdk';

import { Card } from '~/components';
import FormStepper from '~/components/FormStepper';
import FormSections from './FormSections';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Finish from './Finish';

const steps = [
  { index: 0, label: 'Personal Info', component: <StepOne /> },
  { index: 1, label: 'Additional Settings', component: <StepTwo /> },
  { index: 2, label: 'Finish', component: <Finish /> },
];
const defaultValues = {
  name: '',
  age: '',
  email: '',
  newsletter: 'daily',
};

const schema = yup
  .object({
    name: yup.string().required(),
    age: yup.string().required(),
    email: yup.string().email().required(),
    newsletter: yup.string().required(),
  })
  .required();

const Form = () => {
  const { setActiveStep } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    setLoading(true);
    createUser(data).then((res) => {
      setActiveStep(2);
      setLoading(false);

      console.log(res);
    });
  };

  return (
    <Card sx={{ my: 9, p: 5, border: '1px solid #e6e6e6' }} elevation={0}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormStepper steps={steps} loading={loading}>
            <FormSections steps={steps} />
          </FormStepper>
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
