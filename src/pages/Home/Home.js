import { Carousel } from 'react-responsive-carousel';
import React from "react";
import c0 from "../../components/Img/c0.jpg";
import c1 from "../../components/Img/c1.jpg";
import c2 from "../../components/Img/c2.jpg";
import c3 from "../../components/Img/c3.jpg";
import c4 from "../../components/Img/c4.jpg";
import c5 from "../../components/Img/c5.jpg";
import c6 from "../../components/Img/c6.jpg";
import c7 from "../../components/Img/c7.jpg";
import c8 from "../../components/Img/c8.jpg";
import c9 from "../../components/Img/c9.jpg";

import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import {Social } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
  


export default function Home() {
  return (
    
    <div className="container">
    <div className="card mt-2 bg-info">
      <div className="card-title">
        <div className="row">
          <div className="col">
             <h3 className="mx-3 my-3 text-center"> REDE DE CASAIS</h3>
             <h4 className="mx-3 my-3 text-center"> AMAI SEMPRE</h4>
              
             </div>
        </div>
      </div>
                         
                
    <Carousel autoPlay>
        <div>
            <img src={c0} alt="bo" min-width= '358px' max-width='1024px' />

            <p className="l">LegendA 1 </p>
        </div>
        <div>

        <img src={c1} alt="bo" min-width= '358px' max-width='1024px' />

       <p className="l">Legend 2</p>
        </div>
        <div>
       <img src={c2} alt="bo" min-width= '358px' max-width='1024px' />

    <p className="l">Legend 3</p>
        </div>
        <div>
        
        <img src={c3} alt="bo" min-width= '358px' max-width='1024px' />

    <p className="l">Legend 4</p>
        </div>
        <div>
       <img src={c4} alt="bo" min-width= '358px' max-width='1024px' />

   <p className="l">Legend 5</p>
        </div>
        <div>
       <img src={c5} alt="bo" min-width= '358px' max-width='1024px' />

      <p className="l">Legend 6</p>
        </div>
        <div>
       <img src={c6} alt="bo" min-width= '358px' max-width='1024px' />

  <p className="l">Legend 7</p>
        </div>
        <div>
       <img src={c7} alt="bo" min-width= '358px' max-width='1024px' />

  <p className="l">Legend 8</p>
        </div>
        <div>
       <img src={c8} alt="bo" min-width= '358px' max-width='1024px' />

    <p className="l">Legend 9</p>
        </div>
        <div>
       <img src={c9} alt="bo" min-width= '358px' max-width='1024px' />

      <p className="l">Legend 10</p>
      </div>
      
        
    </Carousel>
   
       </div>
              
       <div className="card mt-2 bg-success">
  <h4 className="mx-3 my-3 text-center">ESCOLHA A CELULA MAIS PROXIMA DE SUA CASA </h4>
  <h5 className="mx-3 my-3 text-center">CLIQUE NAS IMAGENS ABAIXO! </h5>
        
               
  
  <div className="row mb-3">
  <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c1} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>


 
      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c2} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>

      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c3} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 05 QUADRA 01 LOTE 22</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>

      <div class='col-4 p-3'>
    <div className="card">
    
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c4} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary "></span>
        </div>
      </div>
      </div>
    

      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c5} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>

      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c6} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>

      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c7} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>

      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c8} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>


      <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c9} alt="bo" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>
      </div>
      
      </div>
      
      <div className="card mt-2 bg-warning">
  <h5 className="mx-3 my-3 text-center">CONHEÇAM NOSSAS MIDIAS SOCIAIS</h5>
  <h6 className="mx-2 my-2 text-center">REDE DE CASAIS AMAI SEMPRE</h6>


          <Social>
               
            
            <a href="https://www.facebook.com/ministerio.amai7">
              
              <FaFacebookSquare/>
            </a>
           
          
            <a href="https://www.instagram.com/ministerio.amai/">
              
              <GrInstagram/>
            </a>
            
          </Social>
         
       
  </div>
  </div>
      
  );
}
