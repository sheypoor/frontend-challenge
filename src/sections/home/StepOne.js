import { RHFTextField } from '~/components/Form';

const StepOne = () => {
  return (
    <>
      <RHFTextField name="name" sx={{ mb: 1, mt: 5 }} size="small" />
      <RHFTextField name="age" sx={{ my: 2 }} size="small" />
    </>
  );
};

export default StepOne;
