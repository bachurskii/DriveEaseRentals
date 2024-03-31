import { SET_SELECTED_CAR } from "../actions/filterActions";
import { SET_SELECTED_PRICE_RANG } from "../actions/filterActions";
const initialState = {
  selectedBrand: "",
  selectedPriceRange: "",
};

export const selectedCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CAR:
      return { ...state, selectedBrand: action.payload };
    case SET_SELECTED_PRICE_RANG:
      return { ...state, selectedPriceRange: action.payload };
    default:
      return state;
  }
};
