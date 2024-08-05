import { Container, Links } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <ButtonText title="Excuir nota" />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://dev.algauer.com</a>
          </li>
          <li>
            <a href="#">https://dev.algauer.com</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
