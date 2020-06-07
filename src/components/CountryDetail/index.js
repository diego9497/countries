import React from "react";
import {
  Back,
  Content,
  Flag,
  Info,
  Item,
  Details,
  Left,
  Right,
} from "./styles";
import Layout from "../Layout";
import Link from "next/link";

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
  return (
    <Layout>
      <Link href="/">
        <Back>Volver</Back>
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
        </Info>
      </Content>
    </Layout>
  );
};
export default CountryDetail;
