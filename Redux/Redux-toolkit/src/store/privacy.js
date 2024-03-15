import { createSlice } from "@reduxjs/toolkit";

createSlice;
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});
export const privacyAction = privacySlice.actions;
export default privacySlice;
