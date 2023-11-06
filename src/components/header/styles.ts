import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  filter: drop-shadow(0 1px 1px #181818);
  background: #131313;
  align-items: center;
  color: white;
  width: 100%;
  height: 2.5rem;
  padding: 2.5rem 2.5rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    border-bottom: 0.2rem solid #202020;
  }
`;

export const Content = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  display: flex;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  position: relative;
  color: #ffff;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #a020f0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
