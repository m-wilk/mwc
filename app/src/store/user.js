import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
  },
  reducers: {
    setStateEmail: (state, action) => {
      state.email = action.payload;
    },
    logOut: (state) => {
      state.email = "";
      localStorage.removeItem("jwt")
    }
  },
});

export const { setStateEmail, logOut } = userSlice.actions;

export default userSlice.reducer;

