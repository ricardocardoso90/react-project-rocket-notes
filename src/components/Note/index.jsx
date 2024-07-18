/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags &&
        <footer>
          {data.tags.map((item) => {
            return (
              <Tag
                key={item.id}
                title={item.name}
              />
            )
          })}
        </footer>
      }
    </Container>
  )
}