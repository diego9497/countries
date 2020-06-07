import styled from "styled-components";
import { Shadow } from "../../styles/GlobalStyles";

export const Container = styled.header`
  background: ${(props) => props.theme.elementBg};
  height: 80px;
  margin-bottom: 40px;
  ${Shadow}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  h1 {
    font-weight: 800;
    font-size: 1.5em;
  }
`;

export const Dark = styled.div`
  font-weight: 600;

  input {
    display: none;
  }
  label {
    user-select: none;
    cursor: pointer;
  }
  label span {
    margin-left: 10px;
  }
`;
