import { Button } from "../../components/Button/index.jsx";

import { Container } from "./styles.js";

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <p>Henrique Machado Algauer</p>
      <span>Vulgo `Piá`</span>
      <Button title="Voltar" />
    </Container>
  );
}
