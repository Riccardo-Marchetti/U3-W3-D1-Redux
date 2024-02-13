import { ERROR, FETCH_JOBS, SPINNER } from "../actions";

const inititalState = {
  jobsFetch: [],
  isLoading: true,
  isError: false,
};

const JobsFetch = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobsFetch: action.payload,
      };
    case SPINNER:
      return {
        ...state,
        isLoading: false,
      };
    case ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
export default JobsFetch;
