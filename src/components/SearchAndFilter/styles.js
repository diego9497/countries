import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
