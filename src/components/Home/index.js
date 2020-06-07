import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../Layout";
import ListOfCountries from "../ListOfCountries";
import SearchAndFilter from "../SearchAndFilter";

import { addListOfCountries } from "../../features/countries/countriesSlice";
import { API_URL } from "../../api";

const Home = ({ listOfCountries, addListOfCountries }) => {
  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((res) => res.json())
      .then((data) => {
        addListOfCountries(data);
      });
  }, []);

  return (
    <Layout>
      <SearchAndFilter />
      <ListOfCountries countries={listOfCountries} />
    </Layout>
  );
};

const mapDispatchToProps = {
  addListOfCountries,
};

const mapStateToProps = ({ countries }) => {
  if (!countries.region && countries.search === "") {
    return {
      listOfCountries: countries.listOfCountries,
    };
  }
  if (countries.region && countries.search === "") {
    return {
      listOfCountries: countries.listOfCountriesByRegion,
    };
  }
  if (countries.search !== "") {
    return {
      listOfCountries: countries.listOfCountriesByName,
    };
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
