import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counter/counterAPI";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
