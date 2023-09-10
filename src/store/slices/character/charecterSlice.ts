import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CharacterState {
  page: number;
  personajes: [];
  isLoading: boolean;
}

const initialState: CharacterState = {
  page: 1,
  personajes: [],
  isLoading: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
START_LOADING_CHARACTER: (state) => {
      state.isLoading = true;
    },
    SET_CHARACTER: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
    }
  },
});

const characterRedecer = characterSlice.reducer;
 
export const {START_LOADING_CHARACTER, SET_CHARACTER} = characterSlice.actions;
export default characterRedecer;