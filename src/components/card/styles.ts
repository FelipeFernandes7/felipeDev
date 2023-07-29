import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  border-radius: 0.5rem;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InformationCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 35rem;
  background-size: contain;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h1`
  font-size: 1rem;
  color: #a020f0;
  margin-bottom: 1rem;
`;

export const SmallTitle = styled(Title)`
  color: #ecf0f1;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  font-style: normal;
`;

export const Description = styled(Title)`
  font-size: medium;
  color: #c1c2c1c1;
`;
