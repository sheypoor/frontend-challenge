import {FC} from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from '@material-ui/core';
import {Controller, useFormContext} from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    width: '100%',
  },
}));

const SignUpStepTwo: FC = () => {
  const classes = useStyles();
  const {control} = useFormContext();
  return (
    <>
      <Grid item md={12} xs={12}>
        <Controller
          name="email"
          control={control}
          render={({field, fieldState: {error}}) => (
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                label="email"
                variant="outlined"
                margin="normal"
                error={!!error}
                helperText={error ? error.message : ''}
                {...field}
              />
            </FormControl>
          )}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <Controller
          name="newsletter"
          control={control}
          render={({field, fieldState: {error}}) => (
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="newsletter">Newsletter</InputLabel>
              <Select
                labelId="newsletter"
                id="newsletter"
                error={!!error}
                {...field}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </Grid>
    </>
  );
};

export default SignUpStepTwo;
