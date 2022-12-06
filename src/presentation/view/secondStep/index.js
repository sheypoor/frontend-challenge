import React, { useContext } from "react";
import {
  Card,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { FormStateContext } from "../../../application/service/formStateService";
import { createUser } from "../../../infrastructure/api";

const SecondStepSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const SecondStepForm = () => {
  const navigate = useNavigate();
  const { getFormData, putFormData } = useContext(FormStateContext);

  const onSubmit = (values, { setSubmitting }) => {
    const details = { ...getFormData(), ...values };
    putFormData(details);

    createUser(details).then((resolve) => {
      setSubmitting(false);
      putFormData({});
      navigate("/");
      alert(JSON.stringify(resolve.user, null, 2));
    });
  };

  return (
    <Card raised={true} className="card-wrapper">
      <Formik
        initialValues={{ email: "", newsletter: "daily" }}
        validationSchema={SecondStepSchema}
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
                  label="Email"
                  margin="dense"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                />
              </Grid>

              <Grid item md={4}>
                <FormControl fullWidth margin="dense">
                  <InputLabel id="newsletter-select-label">
                    Newsletter
                  </InputLabel>
                  <Select
                    id="newsletter-select-label"
                    label="Newsletter"
                    name="newsletter"
                    value={values.newsletter}
                    onChange={handleChange}
                    error={errors.newsletter && touched.newsletter}
                  >
                    <MenuItem value={"daily"}>Daily</MenuItem>
                    <MenuItem value={"weekly"}>Weekly</MenuItem>
                    <MenuItem value={"monthly"}>Monthly</MenuItem>
                  </Select>
                  {errors.newsletter && touched.newsletter && (
                    <FormHelperText error={true}>
                      {errors.newsletter}
                    </FormHelperText>
                  )}
                </FormControl>
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

export default SecondStepForm;
