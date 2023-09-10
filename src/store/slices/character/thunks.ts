import { createAsyncThunk } from "@reduxjs/toolkit";
import { Character } from "./characterSlice";

export const GET_CHARACTERS = createAsyncThunk(
  "character/GET_CHARACTERS",
  async (page: number): Promise<Character[]> => {
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();
    console.log(data.results);
    return data.results;
  }
);
