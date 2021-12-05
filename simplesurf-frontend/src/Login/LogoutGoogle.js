import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '676143975475-1ahb1i1l14o5vbv28aleb7f3b63j9htf.apps.googleusercontent.com';

const onSuccess = () => {
    alert('Logout made successfuly');
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