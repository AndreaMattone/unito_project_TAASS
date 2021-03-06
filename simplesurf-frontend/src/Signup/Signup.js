
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const history = useNavigate();
    function singupClick(){
      history('/Login');
      var datas =
      { 
        "emailMyUser" : username,
        "passwordMyUser" : password,
        "isLog" : "false",
        "usrResponsailities": "instructor"
      }
      axios.post('http://localhost:3001/api/v2/myUsers/create', datas)
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
      //history('/Requests');
    }

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

      const theme = createTheme();

    
    return(
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
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          onChange={e => setUsername(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="password"
                          label="Password"
                          name="password"
                          onChange={e => setPassword(e.target.value)}
                        />
                      </Grid>                      
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={singupClick}
                    >
                      Sign Up
                    </Button>
                   
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/Login" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          
    );
}

export default Signup;







