import { Container,List } from "./styles";
import {FaHeart,FaRegUser,FaUserFriends,FaPlayCircle} from "react-icons/fa";
//import styles from "./styles.module.css";
import React from 'react';


export default function Navbar() {
  
	

  return (
    <Container>
      <List>
        <li>
          <a href="/home">
            <FaHeart />
            <span>Pagina Inicial</span>
          </a>
        </li>
        <li>
          <a href="/sobrenos">
            <FaUserFriends/>
            <span>Sobre Nos</span>
          </a>
        </li>
        <li>
          <a href="/app">
            <FaPlayCircle />
            <span>Hinos Gospel</span>
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
