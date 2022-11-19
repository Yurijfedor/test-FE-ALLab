import { configureStore } from "@reduxjs/toolkit";
import { jobsReducer } from "./contactsSlice";
export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
