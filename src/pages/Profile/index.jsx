import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Avatar, Container, Form } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/ricardocardoso90.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
        />
        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}