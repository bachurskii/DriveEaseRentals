import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import favoriteReducer from "../reducer/favoriteReducer";
import { selectedCarReducer } from "../reducer/filterReducer";

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  carBrand: selectedCarReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
