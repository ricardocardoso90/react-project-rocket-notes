import { Container, Content, Links } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est velit earum officiis sed reprehenderit quaerat illo deleniti eveniet aspernatur.
            Est velit earum officiis sed reprehenderit quaerat illo deleniti eveniet aspernatur.
            Iusto, suscipit esse doloremque possimus eligendi repudiandae laboriosam ab! Molestiae, praesentium.
            Iusto, suscipit esse doloremque possimus eligendi repudiandae laboriosam ab! Molestiae, praesentium.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}