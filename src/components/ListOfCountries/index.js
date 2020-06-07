import React from "react";
import Country from "../Country";
import { Container } from "./styles";

const ListOfCountries = ({ countries }) => {
  return (
    <Container>
      {countries && countries.length > 0 ? (
        countries.map((country) => (
          <Country {...country} key={country.alpha2Code} />
        ))
      ) : (
        <p>No hay resultados..</p>
      )}
    </Container>
  );
};
export default ListOfCountries;
