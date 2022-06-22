import { configureStore } from "@reduxjs/toolkit";
import stableReducer from "./stable.slice";
import favReducer from "./fav.slice";

export default configureStore({
  reducer: {
    stable: stableReducer,
    favorite: favReducer,
  },
});
