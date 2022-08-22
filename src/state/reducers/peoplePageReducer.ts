import { createSlice } from "@reduxjs/toolkit";
import { PeoplePage } from "../../types/types";

export const peoplePageSlice = createSlice({
  name: "peoplePage",
  initialState: {} as PeoplePage,
  reducers: {
    setCount: (state, action) => {
      return (state = { ...action.payload });
    },
  },
});

export const { setCount } = peoplePageSlice.actions;
export default peoplePageSlice.reducer;
