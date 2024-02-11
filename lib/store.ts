import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import idsReducer from "../lib/features/Ids/idSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      idsArray: idsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

