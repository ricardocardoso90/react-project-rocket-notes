import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ title, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={isActive}
      {...rest}
    >
      {isActive ? 'Carregando...' : title}

    </Container>
  )
}