import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ListOfCountriesComponent from "../../components/ListOfCountries";

import { addListOfCountries } from "../../features/countries/countriesSlice";
import { API_URL } from "../../api";

const ListOfCountries = ({ listOfCountries, addListOfCountries }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      if (listOfCountries.length > 0) {
        setIsLoading(false);
      } else {
        let res = await fetch(`${API_URL}/all`);
        let data = await res.json();
        addListOfCountries(data);
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return isLoading ? (
    "Cargando"
  ) : (
    <ListOfCountriesComponent countries={listOfCountries} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ListOfCountries);
