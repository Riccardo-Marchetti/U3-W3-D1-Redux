const inititalState = {
  favourite: {
    content: [],
  },
};

const mainreducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: [...state.favourite.content, action.payload],
        },
      };
    case "DELETE_TO_FAVOURITES":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: state.favourite.content.filter(
            (name, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainreducer;
