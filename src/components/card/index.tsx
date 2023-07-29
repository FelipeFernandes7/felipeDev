import { Container } from "../container";
import profileImg from "../../assets/picture-profile.jpg";
import {
  InformationCard,
  Description,
  ProfileImage,
  Section,
  Title,
  SubTitle,
  SmallTitle,
} from "./styles";
import { pages } from "../../locale/pt/pages";

export function Card() {
  return (
    <Container>
      <Section>
        <ProfileImage src={profileImg} />
        <InformationCard>
          <SubTitle>{pages.card.title}</SubTitle>
          <Title>{pages.card.name}</Title>
          <SmallTitle>{pages.card.profession}</SmallTitle>
          <Description>{pages.card.description}</Description>
        </InformationCard>
      </Section>
    </Container>
  );
}
