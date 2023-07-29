import { styled } from "styled-components";

export const BoxContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-left: 3.5rem;
  display: flex;
  flex-direction: column;
  color: #bdc3c7;
  font-weight: 300;
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    align-items: center;
    padding: 2rem 2rem;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  color: #7d5fff;
  margin-bottom: 1rem;
`;

