import { Container, Links, Content } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excuir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, ullam alias dolor aliquid assumenda et nihil incidunt!
            Voluptates pariatur mollitia, aspernatur nesciunt officiis, adipisci
            nostrum architecto, repellendus sunt consectetur officia.
          </p>
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
        </Content>
      </main>
    </Container>
  );
}
