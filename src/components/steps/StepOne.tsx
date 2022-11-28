import { TextField } from "@mui/material";

const StepOne: React.FC = () => {
  return (
    <>
      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        fullWidth
        sx={{ margin: "8px 0" }}
      />
      <TextField
        id='outlined-basic'
        label='Age'
        type={"number"}
        variant='outlined'
        fullWidth
        sx={{ margin: "8px 0" }}
      />

      <TextField
        id='outlined-basic'
        label='Email'
        type={"email"}
        variant='outlined'
        fullWidth
        sx={{ margin: "8px 0" }}
      />
    </>
  );
};

export default StepOne;
