import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 70px 56px;
  max-width: 1000px;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  color: #757575;
`;
export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  color: #757575;
`;
export const Break = styled.p`
  flex-basis: 100%;
  height: 0px;
`;
