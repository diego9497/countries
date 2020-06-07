export default (state, action) => {
  switch (action.type) {
    case "SET_LIST_OF_COUNTRIES":
      return {
        ...state,
        listOfCountries: action.payload,
      };
    case "SET_LIST_OF_COUNTRIES_BY_REGION":
      const countriesByRegion = state.listOfCountries.filter(
        (country) => country.region === action.payload
      );
      return {
        ...state,
        listOfCountriesByRegion: countriesByRegion,
        region: action.payload,
        search: "",
      };

    case "SET_LIST_OF_COUNTRIES_BY_NAME":
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

    case "CHANGE_DARK_MODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
