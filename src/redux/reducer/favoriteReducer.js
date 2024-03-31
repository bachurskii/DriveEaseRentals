const initialState = {
  favoritesCars: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoritesCars: [...state.favoritesCars, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoritesCars: state.favoritesCars.filter(
          (car) => car.id !== action.payload
        ),
      };
    case "SET_FAVORITES":
      return {
        ...state,
        favoritesCars: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
