import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_CHARACTERS } from "./thunks";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  created: Date;
}

export interface CharacterState {
  page: number;
  characters: Character[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: CharacterState = {
  page: 0,
  characters: [],
  isLoading: true,
  isError: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    /* START_LOADING_CHARACTER: (state) => {
      state.isLoading = true;
    },
    SET_CHARACTER: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
    } */
  },
  extraReducers: (builder) => {
    builder.addCase(GET_CHARACTERS.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      GET_CHARACTERS.fulfilled,
      (state, action: PayloadAction<Character[]>) => {
        state.characters = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(GET_CHARACTERS.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message ??  'Hay un error';
    });
  },
});

const characterRedecer = characterSlice.reducer;

/* export const {START_LOADING_CHARACTER, SET_CHARACTER} = characterSlice.actions; */
export default characterRedecer;
