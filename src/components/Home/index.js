import React from "react";
import ListOfCountries from "../../containers/ListOfCountries";
import SearchAndFilter from "../SearchAndFilter";

const Home = () => {
  return (
    <>
      <SearchAndFilter />
      <ListOfCountries />
    </>
  );
};

export default Home;
