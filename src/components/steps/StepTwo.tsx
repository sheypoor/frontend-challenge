import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../store/slices/formSlice";
import { RootState } from "../../store/store";

const StepTwo: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.formData);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id='newsletter-period-select-label'>
          Newsletter Period
        </InputLabel>
        <Select
          labelId='newsletter-period-select-label'
          id='newsletter-period-select'
          label='Newsletter Period'
          value={formData["newsletter"]}
          onChange={(e) =>
            dispatch(addFormData({ key: "newsletter", value: e.target.value }))
          }
        >
          <MenuItem value={"daily"}>Daily</MenuItem>
          <MenuItem value={"weekly"}>Weekly</MenuItem>
          <MenuItem value={"monthly"}>Monthly</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default StepTwo;
