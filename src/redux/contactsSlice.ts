import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Contact {
  readonly id: string;
  name: string;
  phone: string;
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  location: { lat: number; long: number };
  pictures: string[];
  salary: string;
  title: string;
  updateAt: string;
}

const jobsInitialState = {
  jobsList: [],
  isLoading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: jobsInitialState,

  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.jobsList = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  jobsSlice.actions;

export const selectName = (state: RootState) => state.jobs;

export const jobsReducer = jobsSlice.reducer;
