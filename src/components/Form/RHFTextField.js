import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { TextField } from '~/components';

const RHFTextField = ({ name, helperText, ...other }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      label={name}
      helperText={(errors[name] && errors[name].message) || helperText}
      error={!!errors[name]}
      fullWidth
      {...other}
    />
  );
};
RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.string,
};

export default RHFTextField;
