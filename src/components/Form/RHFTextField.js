// import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { TextField } from '~/components';

// RHFTextField.propTypes = {
//   name: PropTypes.string,
//   rules: PropTypes.object,
//   helperText: PropTypes.string,
//   dir: PropTypes.string,
// };

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
      SelectProps={{ native: true }}
      fullWidth
      {...other}
    />
  );
};
export default RHFTextField;
