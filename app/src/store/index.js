import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import basketReducer from "./basket"

export default configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer
  },
});
