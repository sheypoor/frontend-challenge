import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormHelperText,
  makeStyles,
  createStyles,
  MenuItem,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";

import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import WP from "constants/web";
import { emailRegex } from "utils/regex";
import { createUser } from "sdk";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonWrapper: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        flexDirection: 'column',
      },
    },
    buttons: {
      [theme.breakpoints.down("sm")]: {
        width: '100%',
        margin: '10px auto'
      },
    }
  })
);

const SignupSecondStep = ({ history }) => {
  const classes = useStyles();
  const firstFormData = useSelector((state) => state.signup);
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, errors, handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      newsletter: "",
    },
  });

  useEffect(() => {
    const { name, age } = firstFormData;
    if (!name || !age) {
      history.push(WP.SIGNUP_FIRST_STEP);
    }
  }, []);

  const onSubmit = async (values) => {
    try {
      const { token } = await createUser({ ...values, ...firstFormData });
      if (token) {
        setShowSuccess(true);
      }
      reset()
    } catch (err) {
      // must handle Error
      console.log(err);
    }
  };

  const handleBackStep = () => {
    history.goBack();
  };

  return (
    <Grid container spacing={3} alignItems="center">
      {showSuccess && (
        <Grid item xs={12}>
          <Alert variant="filled" severity="success">
            شما با موفقیت ثبت نام کردین!!
          </Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          <strong> ثبت نام </strong>
        </Typography>
        <small>مرحله دوم</small>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={7}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                style={{ display: "flex" }}
                fullWidth
                id="email"
                type="email"
                name="email"
                inputRef={register({
                  required: "ایمیل الزامی میباشد",
                  pattern: {
                    value: emailRegex,
                    message: "ایمیل وارد شده صحیح نمیباشد",
                  },
                })}
                label="ایمیل"
                variant={"outlined"}
                error={!!errors.email}
              />
              <FormHelperText error focused>
                {errors.email && errors.email.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                style={{ width: "100%" }}
                control={control}
                name="newsletter"
                label="خبرنامه"
                rules={{ required: "انتخاب خبرنامه الزامی میباشد" }}
                as={
                  <TextField
                    select
                    fullWidth
                    variant={"outlined"}
                    error={!!errors.newsletter && true}
                  >
                    <MenuItem value="daily">روزانه</MenuItem>
                    <MenuItem value="weekly">هفتگی</MenuItem>
                    <MenuItem value="monthly">ماهانه</MenuItem>
                  </TextField>
                }
              />
              <FormHelperText error focused>
                {errors.newsletter && errors.newsletter.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Grid
                className={classes.buttonWrapper}
                container
                justify="space-between"
                alignItems="center"
              >
                <Button
                  autoFocus
                  className={classes.buttons}
                  variant="outlined"
                  color="primary"
                  size={"large"}
                  disableElevation
                  onClick={handleBackStep}
                >
                  بازگشت
                </Button>
                <Button
                  autoFocus
                  variant="contained"
                  color="secondary"
                  className={classes.buttons}
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

export default SignupSecondStep;
