import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { TextField } from '~/components';

const RHFSelect = ({ name, children, helperText, defaultValue, ...other }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      select
      defaultValue={defaultValue}
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

RHFSelect.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  helperText: PropTypes.string,
};

export default RHFSelect;
