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
  characters: Character[];
  filteredCharacters: Character[]
  isLoading: boolean;
  isError: string | null;
}

const initialState: CharacterState = {
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
      // Filtrar los personajes según el término de búsqueda
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

export const { FILTER_CHARACTERS } = characterSlice.actions;
const characterRedecer = characterSlice.reducer;

export default characterRedecer;
