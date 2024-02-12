import { configureStore } from "@reduxjs/toolkit";
import mainreducer from "../reducers";

const store = configureStore({
  reducer: mainreducer,
});
export default store;
