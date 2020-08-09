import styled from "styled-components";
import { Shadow } from "../../styles/GlobalStyles";
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background: ${(props) => props.theme.elementBg};
  outline: none;
  border: none;
  height: 50px;
  width: 40%;
  overflow: hidden;
  border-radius: 4px;
  color: ${(props) => props.theme.textSearch};
  stroke: ${(props) => props.theme.textSearch};
  fill: ${(props) => props.theme.textSearch};
  ${Shadow};

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  margin-left: 12px;
  background: transparent;

  ::placeholder {
    color: ${(props) => props.theme.textSearch};
  }
`;
