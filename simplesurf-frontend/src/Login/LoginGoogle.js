import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import axios from 'axios';

const clientId = '676143975475-1ahb1i1l14o5vbv28aleb7f3b63j9htf.apps.googleusercontent.com';

function LoginGoogle(){
  const history = useNavigate();


  /**
   * On success function
   */
  const onSuccess = (res) => {
    console.log ('[Login Success] currentUser:',res.profileObj);
    history('/Home');
    // initializing the setup
    refreshTokenSetup(res);


    /**
     * Saving data to DB and session
     */
    const googleId = res.profileObj.googleId;
    const googleEmail = res.profileObj.email;
    var datas =
    { 
      "id": Number(googleId/100000),
      "emailMyUser" : googleEmail,
      "isLog" : "true",
      "usrResponsailities": "user"
      
    }
    axios.post('http://localhost:3001/api/v1/myUsers/update', datas)
    .then(function (response) {
      console.log(response);
      window.sessionStorage.setItem("loggedId",String(googleId/100000));
      window.sessionStorage.setItem("loggedEmail",googleEmail);
      window.sessionStorage.setItem("loggedResp","user");
      window.location.reload();
     })
     .catch(function (error) {
         console.log(error);
      });


  }


  /**
   * On failure function
   */
  const onFailure = (res) => {
    console.log('[Login failed] res:',res);
  }


  return(
    <div> 
      <GoogleLogin 
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        coockiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>

  );

}

export default LoginGoogle;