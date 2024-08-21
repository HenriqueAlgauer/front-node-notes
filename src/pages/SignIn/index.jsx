import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const data = useAuth();
  console.log(data);
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar sues links úteis</p>

        <h2>Login</h2>

        <Input type="text" placeholder="Email" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title={"Entrar"} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
