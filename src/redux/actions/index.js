export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";
export const INPUT_SEARCH = "INPUT_SEARCH";
export const FETCH_JOBS = "FETCH_JOBS";
export const SPINNER = "SPINNER";
export const ERROR = "ERROR";
export const NULL = "NULL";

//ACTION CREATOR (funzione che ritorna una action)
export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const deleteFromFavouriteAction = (i) => {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: i,
  };
};

export const inputValueAction = (query) => {
  return {
    type: INPUT_SEARCH,
    payload: query,
  };
};

export const searchFetchAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?searchs=" +
          getState().search.searchInput +
          "&limit=20"
      );
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: FETCH_JOBS,
          payload: data,
        });
        dispatch({
          type: SPINNER,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR,
      });
    }
  };
};
