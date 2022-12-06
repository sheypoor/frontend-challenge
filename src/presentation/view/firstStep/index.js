import React, { useContext } from "react";
import { Card, Grid, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { FormStateContext } from "../../../application/service/formStateService";

const FirstStepSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  age: Yup.number().min(1, "Age must be upper than 1").required("Required"),
});

const FirstStepForm = () => {
  const navigate = useNavigate();
  const { getFormData, putFormData } = useContext(FormStateContext);

  const onSubmit = (values, { setSubmitting }) => {
    putFormData({ ...getFormData(), ...values });
    setSubmitting(false);
    navigate("/second-step");
  };

  return (
    <Card raised={true} className="card-wrapper">
      <Formik
        initialValues={{ name: "", age: "" }}
        validationSchema={FirstStepSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item md={4}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="dense"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name && errors.name}
                />
              </Grid>

              <Grid item md={4}>
                <TextField
                  fullWidth
                  label="Age"
                  margin="dense"
                  name="age"
                  type="number"
                  value={values.age}
                  onChange={handleChange}
                  error={errors.age && touched.age}
                  helperText={errors.age && touched.age && errors.age}
                />
              </Grid>

              <Grid item md={4}>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default FirstStepForm;
