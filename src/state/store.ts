import { configureStore } from "@reduxjs/toolkit";
import peoplePageReducer from "./reducers/peoplePageReducer";

export const store = configureStore({
  reducer: {
    peoplePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
