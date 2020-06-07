import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const INITIAL_STATE = {
  listOfCountries: [],
  listOfCountriesByRegion: [],
  listOfCountriesByName: [],
  region: null,
  search: "",
  darkMode: false,
};

export const store = createStore(
  reducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware())
);
