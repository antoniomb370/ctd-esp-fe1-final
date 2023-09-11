import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GET_CHARACTERS } from "./thunks";
import { ICharacter,ICharacterState } from "./interfaceChararter";



const initialState: ICharacterState = {
  characters: [],
  filteredCharacters: [],
  isLoading: true,
  isError: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    FILTER_CHARACTERS: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredCharacters = state.characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GET_CHARACTERS.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      GET_CHARACTERS.fulfilled,
      (state, action: PayloadAction<ICharacter[]>) => {
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

export const { FILTER_CHARACTERS } = characterSlice.actions;
const characterRedecer = characterSlice.reducer;

export default characterRedecer;
