import { Container,List, Logo } from "./styles";
import {FaHeart,FaRegUser,FaUserFriends,FaPlayCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';
import c1 from "../../components/Img/ieq2.jpg";

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
      <Logo>
     <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
                <img src={c1} alt="bo" className="card-img-top" />
                           
              </a>
 <h6 className="card-title">Clique Aqui:</h6>
     </Logo>


    </Container>
  );
}
