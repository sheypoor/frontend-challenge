import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  age: null,
};

const signupReducer = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupFirstStep: (state, { payload }) => {
      state.name = payload.name;
      state.age = payload.age;
    },
  },
});

// actions
export const { signupFirstStep } = signupReducer.actions;

// action creator

export const submitFirstStep = (payload) => {
  return (dispatch) => {
    dispatch(signupFirstStep(payload));
  };
};

export default signupReducer.reducer;
