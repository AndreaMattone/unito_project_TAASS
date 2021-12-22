import React, { useState,useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const clientId = '676143975475-1ahb1i1l14o5vbv28aleb7f3b63j9htf.apps.googleusercontent.com';


/**
 * On success function
 */
const onSuccess = () => {

    /**
     * Updating data on DB and session
     */
    var datas =
    { 
      "id": Number(window.sessionStorage.getItem("loggedId")),
      "isLog" : "false",
    }
    axios.post('http://localhost:3001/api/v1/myUsers/update', datas)
    .then(function (response) {
      console.log(response);
      window.sessionStorage.setItem("loggedId",null);
      window.location.reload();
     })
     .catch(function (error) {
         console.log(error);
    });
    //alert('Logout made successfuly');
}


function LogoutGoogle() {
    return(
        <div>
            
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    );
}

export default LogoutGoogle;