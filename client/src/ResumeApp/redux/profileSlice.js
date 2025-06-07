import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
  linkedIn: "",
  github: "",
  codechef: "",
  leetcode: "",
  codeforces: "",
};

const profileSlice = createSlice({
  name: "profileDetails",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
