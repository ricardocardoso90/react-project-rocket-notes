import { RiShutDownLine } from 'react-icons/ri';
import { Container, Logout, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/ricardocardoso90.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem vindo,</span>
          <strong>Ricardo Cardoso</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}