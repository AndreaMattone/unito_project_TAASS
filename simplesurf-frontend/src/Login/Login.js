import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginGoogle from './LoginGoogle.js';
import LogoutGoogle from './LogoutGoogle.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function Login (){
  const history = useNavigate();
  
  /**
   * Check password Fittizio
   */
  function localLogin(){

    //Check if user is registered
    if(username.localeCompare("")==0){
      setLoginText("Incorrect Username");
    }else{
      if(password.localeCompare("")==0){
        setLoginText("Incorrect Password");
      }else{
        history('/Home');
        var datas =
          { 
            "emailMyUser" : username,
            "passwordMyUser" : password,
          }
        axios.post('http://localhost:3001/api/v2/myUsers/checkIfRegisteredAndLogin', datas)
        .then(function (response) {
          console.log(response.data);
          if(response.data.toString().localeCompare("registeredAndKoPsw")===0){
            //wrong password
            setLoginText("Wrong password!");
          }else if(response.data.toString().localeCompare("notRegistered")===0){
            //not registered
            setLoginText("Not Registered!");
          }else{
            //getUserDataByUsername
            //setLoggedId
            window.sessionStorage.setItem("loggedId",response.data.toString());
            setLoginText("");
            window.location.reload();
          }
        })
        .catch(function (error) {
          console.log(error);
        }); 
      }
    }
  }




  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginText, setLoginText] = useState("");




  
  return(
    <React.Fragment>
       {console.log(window.sessionStorage.getItem("loggedId"))}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              A
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <Typography style={{color:'red'}} >
                {loginText}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={localLogin}
              >
                Sign In
              </Button>
              <div style={{margin:'2%'}}>
                <LoginGoogle/>
              </div>  
              {/*<div style={{margin:'2%'}}>
                <LogoutGoogle />
                </div>*/}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Login;