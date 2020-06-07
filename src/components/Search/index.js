import React from "react";
import { Input } from "./styles";
import { filterCountriesByName } from "../../features/countries/countriesSlice";
import { connect } from "react-redux";

const Search = ({ filterCountriesByName, search }) => {
  const handleChange = (event) => {
    let word = event.target.value;
    filterCountriesByName(word);
  };

  return (
    <div>
      <Input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Buscar un pais..."
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.countries.search,
});

const mapDispatchToProps = {
  filterCountriesByName,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
