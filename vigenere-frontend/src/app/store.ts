import {configureStore} from "@reduxjs/toolkit";
import {codesReducer} from "../features/Codes/CodesSlice";

export const store = configureStore({
  reducer: {
    codes: codesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;