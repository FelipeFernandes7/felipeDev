import { Card } from "../../components/card";
import { home } from "../../locale/pt/pages/home";
import Typewriter from "typewriter-effect";
import { BoxContainer, Content, Title } from "./styles";

export function Home() {
  return (
    <BoxContainer>
      <Content>
        <Title>{home.title}</Title>
        <Typewriter
          options={{
            strings: home.description,
            autoStart: true,
            deleteSpeed: 80,
            delay: 60,
          }}
        />
      </Content>
      <Card />
    </BoxContainer>
  );
}
