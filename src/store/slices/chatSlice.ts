import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    message: "Some Random message (1)",
  },
  {
    message: "Some Random message (2)",
  },
  {
    message: "Some Random message (3)",
  },
  {
    message: "Some Random message (4)",
  },
  {
    message: "Some Random message (5)",
  },
];
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    removeChats: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { removeChats } = chatSlice.actions;
export default chatSlice;
