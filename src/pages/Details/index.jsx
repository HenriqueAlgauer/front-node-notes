import { Container } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <Button title="Voltar" />
    </Container>
  );
}
