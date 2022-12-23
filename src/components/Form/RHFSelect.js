// import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { TextField } from '~/components';

// RHFSelect.propTypes = {
//   name: PropTypes.string,
//   rules: PropTypes.object,
//   helperText: PropTypes.string,
//   dir: PropTypes.string,
// };

const RHFSelect = ({ name, children, helperText, ...other }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      select
      label={name}
      helperText={(errors[name] && errors[name].message) || helperText}
      error={!!errors[name]}
      fullWidth
      {...other}
    >
      {children}
    </TextField>
  );
};
export default RHFSelect;
