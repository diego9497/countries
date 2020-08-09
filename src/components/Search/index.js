import React from "react";
import { InputContainer, Input } from "./styles";
import { filterCountriesByName } from "../../features/countries/countriesSlice";
import SearchIcon from "../Icons/Search";
import { connect } from "react-redux";

const Search = ({ filterCountriesByName, search }) => {
  const handleChange = (event) => {
    let word = event.target.value;
    filterCountriesByName(word);
  };

  return (
    <InputContainer>
      <SearchIcon height={20} width={20} />
      <Input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </InputContainer>
  );
};

const mapStateToProps = (state) => ({
  search: state.countries.search,
});

const mapDispatchToProps = {
  filterCountriesByName,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
