import React, { useState,useEffect } from 'react';
import axios from 'axios';
//import simplesurflogo from '../imgs/simplesurflogo.png';
import AppbarNotLogged from './AppBars/AppbarNotLogged';
import AppbarClient from './AppBars/AppbarClient';
import AppbarInstructor from './AppBars/AppbarInstructor';


function Appbar(){
    
    useEffect(() => {
        getUserResponsability();
    }, []);
    async function getUserResponsability(){
        if(window.sessionStorage.getItem("loggedId") === null || window.sessionStorage.getItem("loggedId").localeCompare("null") == 0){
            setUsrResponsability("null");
        }else{
            try{
                axios.post('http://localhost:3001/api/v1/myUsers/getResp', {"id": Number(window.sessionStorage.getItem("loggedId"))})
                .then(function (response) {
                  //console.log(response);
                  //console.log(response.data);
                  if(response.data.localeCompare("user not exist")==0){
                    setUsrResponsability("null");
                    window.sessionStorage.setItem("loggedId","null");
                  }else{
                    setUsrResponsability(response.data);
                  }
                 })
                 .catch(function (error) {
                     console.log(error);
                  });
            }catch(error){
            }
        }
        
    }
    const [ usrResponsability, setUsrResponsability ] = useState("null");
    
    if(usrResponsability.localeCompare("null") == 0){ //not logged
        return(
        <AppbarNotLogged />
            );
    }else{ //logged in
        if(usrResponsability.localeCompare("user")==0){ //user
            return(
            <AppbarClient />
            );
        }else if(usrResponsability.localeCompare("instructor")==0){ //instructor
            return(
                <AppbarInstructor />
            );
        }else{ //admin o altri userResponsabilities 
        }
    }
}

export default Appbar;

