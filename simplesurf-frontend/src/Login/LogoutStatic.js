import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function LogoutStatic(){


    const history = useNavigate();
    function logoutAction(){
        /**
         * Updating data on DB and session
         * TODO
         */
        var datas =
        { 
        "id": Number(window.sessionStorage.getItem("loggedId")),
        "isLog" : "false",
        }
        axios.post('http://localhost:3001/api/v2/myUsers/update', datas)
        .then(function (response) {
        console.log(response);
        window.sessionStorage.setItem("loggedId",null);
        history('/Home');
        window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div>
            <Button variant="outlined" onClick={logoutAction}>
            LOGOUT
            </Button>
        </div>
        
    );
}
export default LogoutStatic;