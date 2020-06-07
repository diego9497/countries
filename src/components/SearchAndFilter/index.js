import React from "react";
import { Container } from "./styles";
import Search from "../Search";
import Filter from "../Filter";

const SearchAndFilter = (props) => {
  return (
    <Container>
      <Search />
      <Filter />
    </Container>
  );
};
export default SearchAndFilter;
