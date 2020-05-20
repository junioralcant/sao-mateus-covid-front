import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  background: #0b6bfe;
  width: 50%;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  border-bottom-right-radius: 60px;
  color: #fff;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: #fff;
  margin-bottom: 50px;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }

  div {
    display: flex;
    width: 50%;
    max-width: 300px;
    background: #fa0200;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 20px 10px 5px 10px;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 25px;
      margin-bottom: 10px;

      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }

    h2 {
      font-size: 20px;
      font-weight: 200;
      margin-bottom: 10px;

      @media screen and (max-width: 600px) {
        font-size: 15px;
        font-weight: 200;
      }
    }

    img {
      width: 33px;
      height: 33px;

      @media screen and (max-width: 600px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Dados = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48%;
  color: #fff;

  strong {
    background: ${(props) => props.color};
    width: 100%;
    text-align: center;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 5px;
    font-size: 19px;
    text-transform: uppercase;

    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.color};
    width: 100%;
    border-radius: 5px;
    font-weight: bold;
    font-size: 100px;
    height: 230px;

    @media screen and (max-width: 600px) {
      height: 100px;
    }

    small {
      @media screen and (max-width: 600px) {
        font-size: 50px;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  background: #0b6bfe;

  small {
    color: #fff;
    opacity: 0.7;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin-left: 5px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
