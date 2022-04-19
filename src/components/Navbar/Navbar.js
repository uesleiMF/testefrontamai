import { Container,List } from "./styles";
import {FaHeart,FaRegUser,FaUserPlus} from "react-icons/fa";
//import styles from "./styles.module.css";
import React from 'react';


export default function Navbar() {
  
	

  return (
    <Container>
      <List>
        <li>
          <a href="/home">
            <FaHeart />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/sobrenos">
            <FaUserPlus />
            <span>Sobre Nos</span>
          </a>
        </li>
       
       
        <li>
         
            <a href="/">
              <FaRegUser />
              <span>Login</span>
            </a>
        
          
          
        </li>


        


      </List>
    </Container>
  );
}
