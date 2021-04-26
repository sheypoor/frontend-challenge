import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormHelperText,
  makeStyles,
  createStyles,
} from "@material-ui/core";

import { useForm } from "react-hook-form";
import { persianCharactersRegex, integerRegex } from "utils/regex";
import WEB from "constants/web";
import { useDispatch, useSelector } from "react-redux";
import { submitFirstStep } from "store/signup";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonWrapper: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    button: {
      [theme.breakpoints.down("sm")]: {
        width: '100%',
      },
    }
  })
);

const SignupFirstStep = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const firstFormData = useSelector((state) => state.signup);

  const { register, errors, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      age: "",
    },
  });

  useEffect(() => {
    const { name, age } = firstFormData;
    if (name && age) {
      reset({ name, age });
    }
  }, []);

  const onSubmit = (values) => {
    dispatch(submitFirstStep({ ...values }));
    history.push(WEB.SIGNUP_SECOND_STEP);
  };

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          <strong> ثبت نام</strong>
        </Typography>
        <small>مرحله اول</small>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={7}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                style={{ display: "flex" }}
                fullWidth
                id="name"
                name="name"
                inputRef={register({
                  required: "نام الزامی میباشد",
                  pattern: {
                    value: persianCharactersRegex,
                    message: "نام را فارسی وارد کنید",
                  },
                })}
                label="نام"
                variant={"outlined"}
                error={!!errors.name}
              />
              <FormHelperText error focused>
                {errors.name && errors.name.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="number"
                fullWidth
                style={{ display: "flex" }}
                id="age"
                name="age"
                inputRef={register({
                  required: "سن الزامی میباشد",
                  pattern: {
                    value: integerRegex,
                    message: "سن خود را صحیخ وارد نمایید",
                  },
                })}
                label="سن"
                variant={"outlined"}
                error={!!errors.age}
              />
              <FormHelperText error focused>
                {errors.age && errors.age.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Grid
                className={classes.buttonWrapper}
                container
                justify="flex-end"
                alignItems="center"
              >
                <Button
                  autoFocus
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  size={"large"}
                  disableElevation
                  type="submit"
                >
                  مرحله بعد
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignupFirstStep;
