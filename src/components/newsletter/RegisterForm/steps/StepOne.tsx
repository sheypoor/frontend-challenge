import { Grid, TextField } from '@mui/material'

type Props = {
  errors: { [field: string]: string }
  values: { [field: string]: string }
  handleChange: () => InputEvent
}

export default function StepOne({ errors, values, handleChange }: Props) {
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
