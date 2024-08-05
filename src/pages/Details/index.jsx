import { Container, Links } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

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

      <Section title="Marcadores"></Section>

      <Button title="Voltar" />
    </Container>
  );
}
