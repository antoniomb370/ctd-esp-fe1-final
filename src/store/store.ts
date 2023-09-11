import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import characterRedecer from "./slices/character/characterSlice";
import paginacionRedecer from "./slices/paginacion/paginacionSlice";


 const store = configureStore({
  reducer: {
character: characterRedecer,
page: paginacionRedecer,
  }
});

 type RootState = ReturnType<typeof store.getState>;
 type AppDispatch = typeof store.dispatch;

 type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;

export default store;