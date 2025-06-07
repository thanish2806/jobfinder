import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import educationReducer from "./educationSlice";

export const store = configureStore({
  reducer: {
    profileDetails: profileReducer,
    education: educationReducer,
  },
});
