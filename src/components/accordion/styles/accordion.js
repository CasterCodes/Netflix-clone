import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  padding: 70px 45px;
  margin: auto;
`;

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Body = styled.div`
  max-width: 1200px;
  transition: max-height 0.25s cubic bezier(0.5, 0, 0.1, 1);

  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  padding: 0.8px 2px;

  white-space: pre-wrap;
  user-select: none;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Text = styled.p`
  font-size: 26px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursoir: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 678px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 1;
  margin-bottom: 8px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;