import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/Favourite";

import SearchInput from "../reducers/searchFetch";
import JobsFetch from "../reducers/Jobs";

// qua riunifico tutti i reducers
const globalReducers = combineReducers({
  favourite: favouriteReducer,
  jobs: JobsFetch,
  search: SearchInput,
});

const store = configureStore({
  reducer: globalReducers,
});
export default store;
