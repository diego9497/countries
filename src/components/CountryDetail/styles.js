import styled from "styled-components";
import { Shadow } from "../../styles/GlobalStyles";

export const BackContainer = styled.a`
  display: flex;
  align-items: center;
  width: 130px;
  background: ${(props) => props.theme.elementBg};
  color: ${(props) => props.theme.text};
  fill: ${(props) => props.theme.text};
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  ${Shadow};

  svg {
    margin-right: 10px;
  }
`;

export const Content = styled.section`
  display: flex;
  padding-top: 60px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Flag = styled.div`
  width: 50%;
  padding-right: 50px;

  img {
    width: 100%;
    max-height: 370px;
    object-fit: cover;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 0;
  }
`;

export const Info = styled.div`
  width: 50%;
  padding-top: 40px;
  padding-left: 50px;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-left: 0;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const Item = styled.p`
  margin-bottom: 8px;
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;

export const Details = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const BorderCountriesContainer = styled.div`
  margin-top: 40px;
  p {
    display: flex;
    flex-wrap: wrap;

    span {
      font-weight: 600;
      margin-right: 5px;
      line-height: 2em;
    }
  }
`;
