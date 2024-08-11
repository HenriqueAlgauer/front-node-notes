import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar sues links úteis</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="Email" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title={"Cadastrar "} />

        <Link to="/">Voltar para login</Link>
      </Form>
    </Container>
  );
}
