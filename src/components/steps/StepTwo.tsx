import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface IStepTwoProps {
  newsletterPeriod: number;
  handleNewsletterPeriodChange: (selectValue) => void;
}
const StepTwo: React.FC<IStepTwoProps> = ({
  newsletterPeriod,
  handleNewsletterPeriodChange,
}) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id='newsletter-period-select-label'>
          Newsletter Period
        </InputLabel>
        <Select
          labelId='newsletter-period-select-label'
          id='newsletter-period-select'
          value={newsletterPeriod}
          label='Newsletter Period'
          onChange={(e) => handleNewsletterPeriodChange(e.target.value)}
        >
          <MenuItem value={1}>Daily</MenuItem>
          <MenuItem value={2}>Weekly</MenuItem>
          <MenuItem value={3}>Monthly</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default StepTwo;
