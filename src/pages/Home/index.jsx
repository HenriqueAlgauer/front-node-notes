import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Henrique Algauer</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <ButtonText title="Todos" />
        <ButtonText title="React" />
        <ButtonText title="Node JS" />
      </Menu>

      <Search></Search>

      <Content></Content>

      <NewNote></NewNote>
    </Container>
  );
}
