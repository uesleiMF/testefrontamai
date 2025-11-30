import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  background: #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;

  li {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 8px;
    cursor: pointer;
    transition: 0.3s;

    svg {
      font-size: 20px;
      color: #fff;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      transition: 0.2s;

      &:hover {
        color: #ffcc00;
      }
    }

    &:hover svg {
      color: #ffcc00;
    }
  }
`;

export const Logo = styled.div`
  img {
    width: 70px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;
