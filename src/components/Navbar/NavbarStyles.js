import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  background: #1a1a1a;
  display: flex;
  align-items: center;        /* centraliza verticalmente */
  justify-content: flex-start; /* logo e links juntos à esquerda */
  padding: 0 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  z-index: 999;
  gap: 40px; /* espaço entre logo e lista de links */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;   /* tamanho da logo */
    height: 60px;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.08);
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    margin-left: 10px; /* pequeno espaço entre imagem e título */
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 8px;
    cursor: pointer;
    transition: color 0.3s;

    svg {
      font-size: 20px;
      color: #fff;
      transition: color 0.3s;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;

      &:hover {
        color: #ffcc00;
      }
    }

    &:hover svg {
      color: #ffcc00;
    }
  }
`;
