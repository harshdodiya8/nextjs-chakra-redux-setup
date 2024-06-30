import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterExampleSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof createStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
