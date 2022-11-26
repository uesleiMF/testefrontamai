import styled from "styled-components";

export const Container = styled.div`
 
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: start;
  background-color:#aa67d7;
 
 
  
`;

export const Logo = styled.a`
 padding: auto;
  img {
    width: 4rem;
    margin: 0 0rem;
    border-radius: 20%;
    margin-top: auto;
   
    

  }
`;

export const List = styled.ul`

display: flex;
  list-style: none;
  margin-bottom: 0px;
  background:transparent;

  li {
    img {
      width: 4rem;
      margin: auto;
      border-radius: 20%;
      margin-top: auto;
     
      
  
    }
    a {
      text-decoration: none;
      color:  #000000;
      font-weight: 600;
      padding: 0 1rem;
      font-size: 0.9em;
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