import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../Layout";
import ListOfCountries from "../ListOfCountries";
import SearchAndFilter from "../SearchAndFilter";

import { setListOfCountries } from "../../actions/countries";
import { API_URL } from "../../api";

const Home = ({ listOfCountries, setListOfCountries }) => {
  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((res) => res.json())
      .then((data) => {
        setListOfCountries(data);
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
  setListOfCountries,
};

const mapStateToProps = (state) => {
  if (!state.region && state.search === "") {
    return {
      listOfCountries: state.listOfCountries,
    };
  }
  if (state.region && state.search === "") {
    return {
      listOfCountries: state.listOfCountriesByRegion,
    };
  }
  if (state.search !== "") {
    return {
      listOfCountries: state.listOfCountriesByName,
    };
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
