import React from "react";
import Link from "next/link";
import useLazyLoad from "../../hooks/useLazyLoad";
import { Container, Flag, Info, Name, Item, Value } from "./styles";

const Country = ({ name, population, region, capital, flag, alpha3Code }) => {
  const [show, element] = useLazyLoad();
  return (
    <Link href="/[code]" as={`/${alpha3Code}`}>
      <Container ref={element}>
        <Flag
          src={show ? flag : "/images/load-flag.png"}
          alt={`Flag of ${name}`}
        />
        <Info>
          <Name>{name}</Name>
          <p>
            <Item>Population:</Item>
            <Value>{population}</Value>
          </p>
          <p>
            <Item>Region:</Item>
            <Value>{region}</Value>
          </p>
          <p>
            <Item>Capital:</Item>
            <Value>{capital}</Value>
          </p>
        </Info>
      </Container>
    </Link>
  );
};
export default Country;
