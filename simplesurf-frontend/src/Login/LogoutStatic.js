import { render } from '@testing-library/react';
import axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function LogoutStatic(){
    const history = useNavigate();
    function logoutAction(){
        /**
         * Updating data on DB and session
         */
        var datas =
        { 
        "id": Number(window.sessionStorage.getItem("loggedId")),
        "emailMyUser" : String(window.sessionStorage.getItem("loggedEmail")),
        "isLog" : "false",
        "usrResponsailities": String(window.sessionStorage.getItem("loggedResp"))
        }
        axios.post('http://localhost:3001/api/v1/myUsers/update', datas)
        .then(function (response) {
        console.log(response);
        window.sessionStorage.setItem("loggedId","0");
        window.sessionStorage.setItem("loggedEmail","/");
        window.sessionStorage.setItem("loggedResp","/");
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