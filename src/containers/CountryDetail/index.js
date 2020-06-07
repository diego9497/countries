import React, { useEffect } from "react";
import { connect } from "react-redux";
import CountryComponent from "../../components/CountryDetail";
import { currentCountry } from "../../features/countries/countriesSlice";
import { API_URL } from "../../api";

//TODO Añadir esta funcionabilidad en el reducer
const Country = ({ code, country, currentCountry, listOfCountries }) => {
  useEffect(() => {
    const fetchOrSelect = async () => {
      if (!code) {
        currentCountry([]);
        return null;
      }
      if (listOfCountries && listOfCountries.length === 0) {
        let res = await fetch(`${API_URL}/alpha/${code}`);
        let data = await res.json();
        currentCountry(data);
      } else {
        let country = listOfCountries.filter(
          (country) => country.alpha3Code === code
        )[0];
        currentCountry(country);
      }
    };
    fetchOrSelect();
  }, [code]);
  return <CountryComponent {...country} />;
};

const mapStateToProps = (state) => ({
  country: state.countries.currentCountry,
  listOfCountries: state.countries.listOfCountries,
});
const mapDispath = {
  currentCountry,
};
export default connect(mapStateToProps, mapDispath)(Country);
