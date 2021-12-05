/**
after 1 hour your tokenId gets expired and hence it 
won't be used to access data or authenticate users. 
And hence we need to generate new tokenId 

This function checks for expires_in timestamp 
 or our custom time (before the token expires) 
 and calls reloadAuthResponse which is a util function 
 provided by the library and it handles 
 refresh_token and obtains new tokenId.
*/

export const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 -5 *60) * 1000;
        console.log('newAuthRes', newAuthRes);
        // saveUserToken(newAuthRes.access_token); <-- save new token
        console.log('new auth Token', newAuthRes.id_token);

        // Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    };

    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
}