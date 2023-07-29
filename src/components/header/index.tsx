import { Content, LinkStyled, Navbar } from "./styles";

export function Header() {
  return (
    <Navbar>
      <h1>logo</h1>
      <Content>
        <LinkStyled to={"/"}>Home</LinkStyled>
      </Content>
    </Navbar>
  );
}
