import React from "react";
import { Input } from "./styles";
import { filterCountriesByName } from "../../actions/countries";
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

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = {
  filterCountriesByName,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
