import { Grid, TextField, MenuItem } from '@mui/material'
import { NEWSLETTER_PERIODS } from '~~/constants/newsletter'
const StepTwo = ({ errors, values, handleChange }) => {
  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          error={!!errors.email}
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          value={values.email}
          helperText={errors.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="newsletter-period-select"
          select
          error={!!errors.newsletter}
          name="newsletter"
          label="Newsletter"
          value={values.newsletter}
          helperText={errors.newsletter}
          onChange={handleChange}
        >
          {NEWSLETTER_PERIODS.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  )
}

export default StepTwo
