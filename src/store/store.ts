import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import characterRedecer from "./slices/character/charecterSlice";


 const store = configureStore({
  reducer: {
character: characterRedecer

  }
  
});

 type RootState = ReturnType<typeof store.getState>;
 type AppDispatch = typeof store.dispatch;

 type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;

export default store;