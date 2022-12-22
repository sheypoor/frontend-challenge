import { TextField } from '~/components';
import { useFormContext } from 'react-hook-form';
const StepTwo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        {...register('email')}
        label="email"
        size="small"
        helperText={errors.email && errors.email.message}
        error={errors.email}
      />
      <TextField
        {...register('newsletter')}
        label="newsletter"
        size="small"
        helperText={errors.newsletter && errors.newsletter.message}
        error={errors.newsletter}
      />
    </>
  );
};

export default StepTwo;
