import { Grid, TextField } from '@mui/material'

const StepOne = ({ errors, values, handleChange }) => {
  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          error={!!errors.name}
          name="name"
          label="Name"
          placeholder="Name"
          value={values.name}
          helperText={errors.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="age"
          label="Age"
          value={values.age}
          type="number"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  )
}

export default StepOne
