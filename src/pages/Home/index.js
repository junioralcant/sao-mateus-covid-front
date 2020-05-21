import React from "react";

import {
  Container,
  Header,
  Info,
  Content,
  Dados,
  Footer,
  Body,
} from "./styles";
import covid from "../../assets/covid.png";

function Home() {
  return (
    <Container>
      <Header>
        <h2>LOGOTIPO</h2>
      </Header>

      <Info>
        <div>
          <h1>SÃO MATEUS </h1>
          <h2>BALANÇO EPIDEMIOLÓGICO</h2>
          <img src={covid} alt="Covid" />
        </div>
      </Info>

      <Body>
        <Content>
          <Dados color="#fa0200">
            <strong>Confirmados</strong>
            <div>
              <small>206</small>
            </div>
          </Dados>
          <Dados color="#0B6BFE">
            <strong>Suspeitos</strong>
            <div>
              <small>311</small>
            </div>
          </Dados>
        </Content>

        <Content>
          <Dados color="#FF5900">
            <strong>Monitorados</strong>
            <div>
              <small>451</small>
            </div>
          </Dados>
          <Dados color="#3BB802">
            <strong>Descartados</strong>
            <div>
              <small>78</small>
            </div>
          </Dados>
        </Content>

        <Content>
          <Dados color="#FFB403">
            <strong>Recuperados</strong>
            <div>
              <small>58</small>
            </div>
          </Dados>
          <Dados color="#1D1B18">
            <strong>Óbitos</strong>
            <div>
              <small>09</small>
            </div>
          </Dados>
        </Content>
      </Body>

      <Footer>
        <div>
          <small>By</small>
          <a
            href="https://www.instagram.com/jrmarques.dev/?hl=pt-br"
            target="_blank"
          >
            Junior Marques
          </a>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;
