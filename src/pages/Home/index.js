import React, { useEffect, useState } from "react";

import {
  Container,
  Header,
  Info,
  Content,
  Dados,
  Footer,
  Body,
  Loader,
} from "./styles";

import api from "../../services/api";

import covidImg from "../../assets/covid.png";

function Home() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    async function loadDados() {
      const response = await api.get("/covids");

      setCovid(response.data);
    }

    loadDados();
  }, []);

  return (
    <Container>
      <Header>
        <h2>LOGOTIPO</h2>
      </Header>

      <Info>
        <div>
          <h1>SÃO MATEUS </h1>
          <h2>BALANÇO EPIDEMIOLÓGICO</h2>
          <img src={covidImg} alt="Covid" />
        </div>
      </Info>

      {covid.length > 0 ? (
        covid.map((cov) => {
          return (
            <Body key={cov._id}>
              <Content>
                <Dados color="#fa0200">
                  <strong>Confirmados</strong>
                  <div>
                    <small>{cov.confirmados}</small>
                  </div>
                </Dados>
                <Dados color="#0B6BFE">
                  <strong>Suspeitos</strong>
                  <div>
                    <small>{cov.suspeitos}</small>
                  </div>
                </Dados>
              </Content>

              <Content>
                <Dados color="#FF5900">
                  <strong>Monitorados</strong>
                  <div>
                    <small>{cov.monitorados}</small>
                  </div>
                </Dados>
                <Dados color="#3BB802">
                  <strong>Descartados</strong>
                  <div>
                    <small>{cov.descartados}</small>
                  </div>
                </Dados>
              </Content>

              <Content>
                <Dados color="#FFB403">
                  <strong>Recuperados</strong>
                  <div>
                    <small>{cov.recuperados}</small>
                  </div>
                </Dados>
                <Dados color="#1D1B18">
                  <strong>Óbitos</strong>
                  <div>
                    <small>{cov.obitos}</small>
                  </div>
                </Dados>
              </Content>
            </Body>
          );
        })
      ) : (
        <Body>
          <Content>
            <Dados color="#fa0200">
              <strong>Confirmados</strong>
              <div>
                <small>
                  <Loader />
                </small>
              </div>
            </Dados>
            <Dados color="#0B6BFE">
              <strong>Suspeitos</strong>
              <div>
                <small>
                  <Loader />
                </small>
              </div>
            </Dados>
          </Content>

          <Content>
            <Dados color="#FF5900">
              <strong>Monitorados</strong>
              <div>
                <small>
                  <Loader />
                </small>
              </div>
            </Dados>
            <Dados color="#3BB802">
              <strong>Descartados</strong>
              <div>
                <small>
                  <Loader />
                </small>
              </div>
            </Dados>
          </Content>

          <Content>
            <Dados color="#FFB403">
              <strong>Recuperados</strong>
              <div>
                <small>
                  <Loader />
                </small>
              </div>
            </Dados>
            <Dados color="#1D1B18">
              <strong>Óbitos</strong>
              <div>
                <small>
                  <Loader />
                </small>
              </div>
            </Dados>
          </Content>
        </Body>
      )}

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
