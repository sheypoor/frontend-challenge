import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../../store/slices/formSlice";
import { RootState } from "../../store/store";

const StepOne: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.formData);

  return (
    <>
      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        fullWidth
        required
        value={formData["name"]}
        onChange={(e) =>
          dispatch(addFormData({ key: "name", value: e.target.value }))
        }
        sx={{ margin: "8px 0" }}
      />
      <TextField
        id='outlined-basic'
        label='Age'
        type={"number"}
        variant='outlined'
        fullWidth
        required
        value={formData["age"]}
        onChange={(e) =>
          dispatch(addFormData({ key: "age", value: parseInt(e.target.value) }))
        }
        sx={{ margin: "8px 0" }}
      />

      <TextField
        id='outlined-basic'
        label='Email'
        type={"email"}
        variant='outlined'
        fullWidth
        required
        value={formData["email"]}
        onChange={(e) =>
          dispatch(addFormData({ key: "email", value: e.target.value }))
        }
        sx={{ margin: "8px 0" }}
      />
    </>
  );
};

export default StepOne;
