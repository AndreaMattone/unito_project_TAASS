import './App.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import Pricing from './Pricing/Pricing.js';
import Footer from './UI/Footer.js';
import Appbar from './UI/Appbar.js';
import Login from './Login/Login.js';
import NotFound from './UI/NotFound.js';
import Booking from './Booking/Booking.js';
import Home from './Home/Home.js';

/**
 * npm i react-router-dom
 * npm install @mui/material
 * npm install @emotion/react
 * npm install @emotion/styled
 * npm i react-google-login
*/

function App() {
  
  return (
    
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
            
      <Router>
        <Routes>
          <Route path="/" exact element={
            <Navigate from="/" to="/Home" />
          }>
          </Route>


          {/**
            if(isLoggedIn() ){ //chiama una funzione qua su react che chiama una post sul db che chiede se è logged in e restituisce true o false
              return <button>Logout</button>
            } else{
              return <button>Login</button>
            }
          */}

          <Route path="/Home" element={
            <React.Fragment>
              <Appbar />
              <Home />
              <Footer />
            </React.Fragment>
          }>
          </Route>

          <Route path="/Pricing" element={
            <React.Fragment>
              <Appbar />
              <Pricing />
              <Footer />
            </React.Fragment>
          }>
          </Route>

          <Route path="/Booking" element={
            <React.Fragment>
              <Appbar />
              <Booking />
              <Footer />
            </React.Fragment>
          }>
          </Route>

          <Route path="/Login" element={
            <Login />
          }>
          </Route>









          <Route path="/*" element={
            <NotFound />
          }>
          </Route>

        </Routes>
      </Router>
      

    </React.Fragment>
  );
}

export default App;



/**
 * <Router>
      <Routes>
        
        <Route path="/cicci" exact element={<Navigate from="/" to="/test" />}>
        </Route>
        <Route path="/test" element={<div>
            test
          </div>}>
        </Route>
      </Routes>
  </Router>
 */