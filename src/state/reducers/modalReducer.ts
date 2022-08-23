import { createSlice } from "@reduxjs/toolkit";
import { PeoplePage, Person } from "../../types/types";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    person: <Person>{},
  },
  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
    setPerson: (state, action) => {
      state.person = { ...action.payload };
    },
  },
});

export const { setOpen } = modalSlice.actions;
export default modalSlice.reducer;
