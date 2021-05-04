import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
`;
export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
export const Container = styled.div`
  display: flex;
  margin: 0px 56px;
  height: 64px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0px 30px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  // width: 75px;
  height: fit-content;
  color: white;
  border: 0;
  text-align: center;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;