import styled from "styled-components";
import { Shadow } from "../../styles/GlobalStyles";

export const Container = styled.article`
  background: ${(props) => props.theme.elementBg};
  height: 330px;
  border-radius: 4px;
  overflow: hidden;
  font-size: 15px;
  cursor: pointer;
  ${Shadow};
`;

export const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 20px;
`;

export const Name = styled.h3`
  font-size: 1em;
  margin-bottom: 10px;
`;

export const Item = styled.span`
  font-weight: 600;
  font-size: 0.9em;
`;
export const Value = styled.span`
  font-weight: 300;
  font-size: 0.9em;
  margin-left: 5px;
`;
