import { RHFTextField, RHFSelect } from '~/components/Form';
import { MenuItem } from '~/components';

const newsletterOptions = ['daily', 'weekly', 'monthly'];

const StepTwo = () => {
  return (
    <>
      <RHFTextField name="email" sx={{ mb: 2, mt: 5 }} size="small" />

      <RHFSelect
        name="newsletter"
        sx={{ my: 2 }}
        size="small"
        defaultValue="daily"
      >
        {newsletterOptions.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </RHFSelect>
    </>
  );
};

export default StepTwo;
