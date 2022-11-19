import { Container,List } from "./styles";
import {FaHeart,FaRegUser,FaUserFriends,FaPlayCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';


export default function Navbar() {
  
	

  return (
    <Container>
      <List>
    <li>
      <FaHeart />
      <Link to="/home">Pagina Inicial</Link>
   </li>
       
     <li>
         <FaUserFriends/> 
         <Link to="/sobrenos">Sobrenós</Link>
      </li>
      
      <li>
         <FaPlayCircle />
         
         <Link to="/app">Hinos Gospel</Link>
            
        </li>
       
        <li>
           <FaRegUser />
           <Link to="/">Login</Link>
            
                   
        </li>


      </List>
    </Container>
  );
}
