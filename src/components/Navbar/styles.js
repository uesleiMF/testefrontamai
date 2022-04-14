import styled from "styled-components";

export const Container = styled.div`
 
  border-bottom: 100px ;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-color:#aa67d7;
  padding: 18px;
  width= 90%;
 
  
`;

export const Logo = styled.a`

  padding: 1.2rem 0;


  img {
    width: 5rem;
    margin: 0 1rem;
    border-radius: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0px;
  background:transparent;

  li {
    a {
      text-decoration: none;
      color:  #000000;
      font-weight: 700;
      padding: 0 1rem;
      font-size: 0.7em;
      display: flex;
      align-items: center;

      span {
        padding: 0 0.2rem;
      }

      &:hover {
        color: white;
        cursor: pointer;
        transition: all 200ms ease;
      }
    }
  }
`;