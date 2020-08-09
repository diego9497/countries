import React from "react";
import {
  BorderCountriesContainer,
  BackContainer,
  Content,
  Flag,
  Info,
  Item,
  Details,
  Left,
  Right,
} from "./styles";
import Link from "next/link";
import Back from "../Icons/Back";
import BorderCountryContainer from "../../containers/BorderCountry";

const CountryDetail = ({
  name,
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  let listOfLanguages = "";
  if (languages) {
    for (let i = 0; i < languages.length; i++) {
      if (i === languages.length - 1) {
        listOfLanguages += languages[i].name;
      } else {
        listOfLanguages += languages[i].name + ", ";
      }
    }
  }
  console.log("Resto de info", borders);
  return (
    <>
      <Link href="/">
        <BackContainer>
          <Back />
          Back
        </BackContainer>
      </Link>
      <Content>
        <Flag>
          <img src={flag} alt={`Flag of ${name}`} />
        </Flag>
        <Info>
          <h2>{name}</h2>
          <Details>
            <Left>
              <Item>
                <span>Native name:</span>
                {nativeName}
              </Item>
              <Item>
                <span>Population:</span>
                {population}
              </Item>
              <Item>
                <span>Region:</span>
                {region}
              </Item>
              <Item>
                <span>Sub region:</span>
                {subregion}
              </Item>
              <Item>
                <span>Capital:</span>
                {capital}
              </Item>
            </Left>
            <Right>
              <Item>
                <span>Top Level Domain:</span>
                {topLevelDomain && topLevelDomain[0]}
              </Item>
              <Item>
                <span>Currencies:</span>
                {currencies && currencies[0].name}
              </Item>
              <Item>
                <span>Lenguages:</span>
                {listOfLanguages}
              </Item>
            </Right>
          </Details>
          <BorderCountriesContainer>
            <p>
              <span>Border countries:</span>
              {borders &&
                borders.map((border) => {
                  console.log(border);
                  return <BorderCountryContainer key={border} code={border} />;
                })}
            </p>
          </BorderCountriesContainer>
        </Info>
      </Content>
    </>
  );
};
export default CountryDetail;
