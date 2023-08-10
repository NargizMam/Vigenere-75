import {configureStore} from "@reduxjs/toolkit";
import {selectCodes} from "../features/Codes/CodesSlice";

export const store = configureStore({
  reducer: {
    codes: selectCodes
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;