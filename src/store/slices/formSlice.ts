import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormData {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}

export interface IFormState {
  formData: IFormData | {};
}
const initialState: IFormState = {
  formData: {},
};

export const fromSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<any>) => {
      state.formData = {
        ...state.formData,
        [action.payload.key]: action.payload.value,
      };
      console.log("IFormState", state.formData);
    },
  },
});
export const { addFormData } = fromSlice.actions;

export default fromSlice.reducer;
