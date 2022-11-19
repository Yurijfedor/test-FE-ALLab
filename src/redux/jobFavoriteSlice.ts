import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Job } from "./jobsSlice";

export interface favoriteId {
  isFavorite: boolean;
  id: string;
}

const favoriteInitialState: favoriteId[] = [];

const isFavoriteSlice = createSlice({
  name: "isFavorite",
  initialState: favoriteInitialState,

  reducers: {
    initFavoriteState(state, action: PayloadAction<Job[]>) {
      action.payload.forEach((element) => {
        const initialState = {
          isFavorite: false,
          id: element.id,
        };
        state.push(initialState);
      });
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      const findedJobIndex = state.findIndex(({ id }) => id === action.payload);
      state[findedJobIndex].isFavorite = !state[findedJobIndex].isFavorite;
    },
  },
});

export const { toggleFavorite, initFavoriteState } = isFavoriteSlice.actions;

export const selectName = (state: RootState) => state.isFavorite;

export const isFavoriteReducer = isFavoriteSlice.reducer;
