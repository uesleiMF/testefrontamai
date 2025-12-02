import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: #35d8aaff;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const OverlayMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(26, 26, 26, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 998;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;

  li {
    a {
      color: #fff;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.3s;

      &:hover {
        color: #ffcc00;
      }
    }
  }

  /* Desktop não precisa de overlay */
  @media (max-width: 768px) {
    display: none;
  }
`;
