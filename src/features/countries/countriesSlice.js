import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    listOfCountries: [],
    listOfCountriesByName: [],
    listOfCountriesByRegion: [],
    search: "",
    region: null,
  },
  reducers: {
    addListOfCountries(state, action) {
      state.listOfCountries = action.payload;
    },
    filterCountriesByRegion: {
      reducer(state, action) {
        const countriesByRegion = state.listOfCountries.filter(
          (country) => country.region === action.payload
        );
        return {
          ...state,
          listOfCountriesByRegion: countriesByRegion,
          region: action.payload,
          search: "",
        };
      },
    },
    filterCountriesByName: {
      reducer(state, action) {
        let list = state.listOfCountries;
        if (state.listOfCountriesByRegion.length > 0) {
          list = state.listOfCountriesByRegion;
        }
        const countriesByName = list.filter((country) =>
          country.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          listOfCountriesByName: countriesByName,
          search: action.payload,
        };
      },
    },
  },
});

export const {
  addListOfCountries,
  filterCountriesByName,
  filterCountriesByRegion,
} = countriesSlice.actions;

export default countriesSlice.reducer;
