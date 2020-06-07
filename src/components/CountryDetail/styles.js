import styled from "styled-components";

export const Back = styled.a`
  background: ${(props) => props.theme.elementBg};
  color: ${(props) => props.theme.text};
  padding: 10px;
`;

export const Content = styled.section`
  display: flex;
  padding-top: 60px;
`;

export const Flag = styled.div`
  width: 50%;
  padding-right: 50px;

  img {
    width: 100%;
    max-height: 370px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  width: 50%;
  padding-top: 40px;
  padding-left: 50px;
`;

export const Left = styled.div`
  width: 50%;
`;

export const Right = styled.div`
  width: 50%;
`;

export const Item = styled.p`
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;

export const Details = styled.div`
  display: flex;
`;
