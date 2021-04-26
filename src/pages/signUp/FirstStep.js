import React from "react";
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
import { persianCharactersRegex, integerRegex } from "utils/regexes";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonWrapper: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  })
);

const SignUp = ({ history }) => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      age: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          <strong> ثبت نام</strong>
        </Typography>
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

export default SignUp;
