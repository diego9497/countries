import { API_URL } from "../api";

export const setListOfCountries = (payload) => ({
  type: "SET_LIST_OF_COUNTRIES",
  payload,
});

export const filterCountriesByRegion = (payload) => ({
  type: "SET_LIST_OF_COUNTRIES_BY_REGION",
  payload,
});
export const filterCountriesByName = (payload) => ({
  type: "SET_LIST_OF_COUNTRIES_BY_NAME",
  payload,
});
