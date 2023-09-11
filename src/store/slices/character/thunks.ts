import { createAsyncThunk } from "@reduxjs/toolkit";
import { Character } from "./characterSlice";
export const GET_CHARACTERS = createAsyncThunk(
  "character/GET_CHARACTERS",
  async ({numeroPagina, parametro}:{numeroPagina:number; parametro:string}): Promise<Character[]> => {
    
    try {
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/?${parametro}=${numeroPagina}`
      );
      const data = await resp.json();
      const reseltsChararters =data.results;
      console.log(data.results);
      return reseltsChararters;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);
/* `https://rickandmortyapi.com/api/character?page=${page}` */