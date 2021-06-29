import {FC} from 'react';
import {Grid, TextField, makeStyles, FormControl} from '@material-ui/core';
import {Controller, useFormContext} from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    width: '100%',
  },
}));

const SignUpStepOne: FC = () => {
  const classes = useStyles();
  const {control} = useFormContext();
  return (
    <>
      <Grid item md={12} xs={12}>
        <Controller
          name="name"
          control={control}
          render={({field, fieldState: {error}}) => (
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                label="Your name"
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
          name="age"
          control={control}
          render={({field, fieldState: {error}}) => (
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                label="Age"
                variant="outlined"
                error={!!error}
                helperText={error ? error.message : ''}
                {...field}
              />
            </FormControl>
          )}
        />
      </Grid>
    </>
  );
};

export default SignUpStepOne;
