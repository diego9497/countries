import styled from "styled-components";

export const MoonContainer = styled.div`
  display: inline-block;
  transform: rotate(145deg);
  color: ${(props) => props.theme.text};
  fill: ${(props) => props.theme.text};
`;
