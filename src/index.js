import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sobrenos from "./pages/Sobrenos/Sobrenos";




ReactDOM.render(
    <BrowserRouter>
       <Navbar/>
        <Switch>
          
           
            <Route path= "/home" component={Home} />
            <Route path= "/sobrenos" component={Sobrenos} />
           
        
         {/* <Route component={NotFound}/> */}

        </Switch> 
         <Footer/>
    </BrowserRouter>,
  
    document.getElementById('root')
);