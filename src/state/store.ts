import { configureStore } from "@reduxjs/toolkit";
import reducerIndex from "./reducers/reducerIndex";

export const store = configureStore({
  reducer: {
    reducerIndex,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
