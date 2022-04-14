import styled from "styled-components";

export const Container = styled.div`
background-color: black;
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`

export const Title = styled.h2`
  text-align: center;
  padding: 4rem;
  font-weight: 500;
`
export const Item = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #000;

  img {
    width: 15rem;
    height: 10rem;
    border-radius: 0.4rem;
  }

  h2 {
    padding: 0.5rem 0;
    font-size: 1.2em;
    inline-size: 15rem;
    overflow-wrap: break-word;
  }
`;
export const Form = styled.form`
  background-color: black;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 0 0 4rem 0;
  border-radius:100px;

  label {
    font-size: 1.2rem;
  }

  input {
    font-size: 1.2rem;
    padding: 0.4rem 0.6rem;
    margin: 0 0 1rem 0;
  }
`

export const Terms = styled.div`
  margin: 2rem 0;
  padding: 0.5rem 0;
  border-top: 1px solid #00000028;
  border-bottom: 1px solid #00000028;

  label {
    font-size: 0.8rem;
    text-align: justify;
  }

  a {
    color: #97B0E7;
  }

  input {
    margin: 0 0.5rem;
  }
`

export const Cards = styled.div`
  padding: 1%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid grey

`;
export const Social = styled.div`
  a {
    font-size: 2.5rem;
    color: #0000FF;
    text-decoration: none;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: #b1b1b1;
    color: #fff;
    border: none;
    border-radius: 1rem;
    padding: 0.6rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #b1b1b173;
    }
  }

`
