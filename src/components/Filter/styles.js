import styled from "styled-components";
import { Shadow } from "../../styles/GlobalStyles";

export const Select = styled.div`
  color: ${(props) => props.theme.text};
  border: none;
  appearance: none;
  outline: none;
  width: 200px;
  position: relative;
  font-size: 0.9em;
  font-weight: 600;
`;

export const Actual = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.elementBg};
  padding: 15px 20px;
  border-radius: 4px;
  cursor: pointer;
  ${Shadow}
`;

export const Options = styled.ul`
  position: absolute;
  width: 180px;
  margin-top: 4px;
  background: ${(props) => props.theme.elementBg};
  border-radius: 4px;
  overflow: hidden;
  ${Shadow};
  display: ${(props) => (props.isOpen ? "initial" : "none")};
`;
export const Option = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;

  :hover {
    background: ${(props) => props.theme.hover};
  }
`;
