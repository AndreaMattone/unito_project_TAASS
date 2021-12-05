import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '676143975475-1ahb1i1l14o5vbv28aleb7f3b63j9htf.apps.googleusercontent.com';

function LoginGoogle(){
  const history = useNavigate();
  const onSuccess = (res) => {
    console.log ('[Login Success] currentUser:',res.profileObj);
    history('/Home');
    // initializing the setup
    refreshTokenSetup(res);
  }
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