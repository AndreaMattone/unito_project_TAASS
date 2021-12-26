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
import Test from './Tests/Tests.js';
import Requests from './Instructors/Requests';
import Account from './Account/Account';

/**
 * npm i react-scripts
 * npm i react-router-dom         //Routing
 * npm install @mui/material      //UI
 * npm install @emotion/react
 * npm install @emotion/styled
 * npm i react-google-login       //google login
 * npm install axios              //Rest calls
 * npm install react-calendar     //calendar
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

          <Route path="/Home" element={
            <React.Fragment>
              <Appbar/>
              <Home />
              <Footer />
            </React.Fragment>
          }>
          </Route>

          

          <Route path="/Pricing" element={
            <React.Fragment>
              <Appbar/>
              <Pricing />
              <Footer />
            </React.Fragment>
          }>
          </Route>

          <Route path="/Booking" element={
            <React.Fragment>
              <Appbar/>
              <Booking />
              <Footer />
            </React.Fragment>
          }>
          </Route>

          <Route path="/Login" element={
            <Login/>
          }>
          </Route>

          <Route path="/Tests" element={
            <Test/>
          }>
          </Route>

          <Route path="/Requests" element={
            <React.Fragment>
              <Appbar/>
              <Requests/>
              <Footer />
            </React.Fragment>
          }>
          </Route>

          <Route path="/Account" element={
            <React.Fragment>
              <Appbar/>
              <Account/>
              <Footer />
            </React.Fragment>
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
