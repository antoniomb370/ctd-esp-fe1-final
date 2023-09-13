import { createSlice } from "@reduxjs/toolkit";
import { IPaginacionState } from "./interfacePaginacion";

const initialState: IPaginacionState = {
  valor:1,
};

export const paginacionSlice = createSlice({
  name: "pagina",
  initialState: initialState,
  reducers: {
    NEXT_PAGE: (state) => {
      console.log("Ejecutando NEXT_valor");
      state.valor += 1;
      console.log("Nuevo estado de valor:", state.valor);
    },

    PREVIOUS_PAGE: (state) => {
      
      if (state.valor > 1) {
        console.log("Ejecutando PREVIOUS_valor");
        state.valor = state.valor - 1;
        console.log("Nuevo estado de valor:", state.valor);
      }
    },
  },
});

const paginacionRedecer = paginacionSlice.reducer;
export const { PREVIOUS_PAGE, NEXT_PAGE } = paginacionSlice.actions;
export default paginacionRedecer;
