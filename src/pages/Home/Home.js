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
import ReactAudioPlayer from 'react-audio-player';
//import son from "../../Audio/audio.mp3";
import som from "../../Audio/audio1.mp3";

import 'react-h5-audio-player/lib/styles.css';




export default function Home() {
  return (
    
    <div className="container">
    <div className="card mt-1 bg-info">
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
            <img src={c0} alt="bo" height= '300px' />

            <p className="">LegendA 1 </p>
        </div>
        <div>

        <img src={c1} alt="bo" height= '300px'/>

       <p className="l">Legend 2</p>
        </div>
        <div>
       <img src={c2} alt="bo"  height= '300px' />

    <p className="l">Legend 3</p>
        </div>
        <div>
        
        <img src={c3} alt="bo" height= '300px' />

    <p className="l">Legend 4</p>
        </div>
        <div>
       <img src={c4} alt="bo" height= '300px' />

   <p className="l">Legend 5</p>
        </div>
        <div>
       <img src={c5} alt="bo" height= '300px' />

      <p className="l">Legend 6</p>
        </div>
        <div>
       <img src={c6} alt="bo" height= '300px' />

  <p className="l">Legend 7</p>
        </div>
        <div>
       <img src={c7} alt="bo" height= '300px' />

  <p className="l">Legend 8</p>
        </div>
        <div>
       <img src={c8} alt="bo" height= '300px' />

    <p className="l">Legend 9</p>
        </div>
        <div>
       <img src={c9} alt="bo" height= '300px'/>

      <p className="l">Legend 10</p>
      </div>
      
        
    </Carousel>
   
    <div className="container">
      <div className="card mt-6 bg-warning">
        <div className="card-title">
          <div className="row">
            <div className="col">
         
            
       <h4 className="mx-3 my-3 text-center">ESCOLHA A CELULA MAIS PROXIMA DE SUA CASA </h4>
  <h5 className="mx-3 my-3 text-center">CLIQUE NAS IMAGENS ABAIXO! </h5>
        


          </div>
     
     </div>
     </div>
     
     </div>

          <div className="card mt-4 bg-success">
  
               
  
  <div className="row mb-3">
  <div class='col-4 p-3'>
    <div className="card">
    <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
            <img src={c1} alt="bo" width="25px" height="100px"  className="card-img-top"/>
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
      
            <img src={c2} alt="bo" width="25px" height="100px" className="card-img-top"/>
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
      
            <img src={c3} alt="bo" width="25px" height="100px" className="card-img-top"/>
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
      
            <img src={c2} alt="bo" width="25px" height="100px" className="card-img-top"/>
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
      
            <img src={c1} alt="bo" width="25px" height="100px" className="card-img-top"/>
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
      
            <img src={c2} alt="bo" width="25px" height="100px" className="card-img-top"/>
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
      
            <img src={c1} alt="bo" width="25px" height="100px" className="card-img-top"/>
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
      
            <img src={c2} alt="bo" width="25px" height="100px"  className="card-img-top"/>
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
      
            <img src={c1} alt="bo" width="25px" height="100px" className="card-img-top"/>
              </a>
              
             <div className="card-body">
          <h8 className="card-title">FOLHA 17 QUADRA 13 LOTE 09</h8>
          <span className="badge bg-primary"></span>
        </div>
      </div>
      </div>

      </div>
     
     </div>
  

     

     <h5 className="mx-3 my-3 text-center">CONHECAM AS MIDIAS SOCIAIS DO MINISTERIO AMAI! </h5>
          
          <Social>
               
            
            <a href="https://www.facebook.com/ministerio.amai7">
              
              <FaFacebookSquare/>
            </a>
           
          
            <a href="https://www.instagram.com/ministerio.amai/">
              
              <GrInstagram/>
            </a>
            
          </Social>
         
          <ReactAudioPlayer
  
  src={som} autoPlay  controls  />
 
  
  </div>
  </div>
  </div>
  
  
  );
}
