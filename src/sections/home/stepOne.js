import { TextField } from '~/components';
import { useFormContext } from 'react-hook-form';
const StepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        {...register('name')}
        label="name"
        size="small"
        helperText={errors.name && errors.name.message}
        error={errors.name}
      />
      <TextField
        {...register('age')}
        label="age"
        size="small"
        helperText={errors.age && errors.age.message}
        error={errors.newsletter}
      />
    </>
  );
};

export default StepOne;
