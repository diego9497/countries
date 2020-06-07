import styled from "styled-components";
import { Shadow } from "../../styles/GlobalStyles";
export const Input = styled.input`
  background: ${(props) => props.theme.elementBg};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  height: 50px;
  border-radius: 4px;
  ${Shadow};

  ::placeholder {
    color: ${(props) => props.theme.text};
  }
`;
