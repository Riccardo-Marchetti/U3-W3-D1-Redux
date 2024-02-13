import { INPUT_SEARCH } from "../actions";

const inititalState = {
  searchInput: "",
};

const SearchInput = (state = inititalState, action) => {
  switch (action.type) {
    case INPUT_SEARCH:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};

export default SearchInput;
