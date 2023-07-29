import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const SocialBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const RedirectTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: #232323;
  color: #ecf0f1;
  border: 2px solid #ecf0f1;
  transition: all linear 0.3s;
  &:hover {
    color: #7d5fff;
    border: 2px solid #7d5fff;
  }
`;
