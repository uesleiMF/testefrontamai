import styled from "styled-components";

export const Container = styled.div`
 
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start; 
  background-color:#aa67d7;
  padding: 0.6rem 2rem;
 
  
`;

export const Logo = styled.a`
padding: 1.1rem 0;
display: flex;
list-style: none;
margin-bottom: 0px;
background:transparent;




img {
    width: 5rem;
    margin: 0 0rem;
    border-radius: 25%;
    margin-top: auto;
    
    

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
      font-size: 0.8rem;
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