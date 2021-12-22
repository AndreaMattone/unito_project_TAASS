import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import axios from 'axios';
import LogoutGoogle from '../../Login/LogoutGoogle';
import LogoutStatic from '../../Login/LogoutStatic';

const AppbarNotLogged = () =>{
    return(
        <React.Fragment>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography style={{marginTop:'0.5%', font:'Roboto' }}  variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            {/*<img src={simplesurflogo} alt='simplesurf_logo' />*/}
                            SimpleSurf
                        </Typography>
                        {/**Barra nav links */}
                        <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/Home"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Home
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/Pricing"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Pricing
                        </Link>
                        </nav>
    
                        {/**Login button */}
                        <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            Login
                        </Button>
    
                        
    
    
                    </Toolbar>
                </AppBar>
            </React.Fragment>
    );
}

export default AppbarNotLogged;