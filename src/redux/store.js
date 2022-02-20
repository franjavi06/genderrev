import { configureStore } from "@reduxjs/toolkit";
import votoReducer from "./votoSlice";

export default configureStore({
  reducer: {
    voto: votoReducer,
  },
});
