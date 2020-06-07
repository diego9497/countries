import { combineReducers } from "redux";
import countriesReducer from "../features/countries/countriesSlice";
import themeReducer from "../features/theme/themeSlice";

export default combineReducers({
  countries: countriesReducer,
  theme: themeReducer,
});
