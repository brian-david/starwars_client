import { createSlice } from "@reduxjs/toolkit";
import { PeoplePage } from "../../types/types";

export const peoplePageSlice = createSlice({
  name: "peoplePage",
  initialState: {} as PeoplePage,
  reducers: {
    setPage: (state, action) => {
      return (state = { ...action.payload });
    },
  },
});

export const { setPage } = peoplePageSlice.actions;
export default peoplePageSlice.reducer;
