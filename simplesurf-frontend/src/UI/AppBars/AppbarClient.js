import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LogoutGoogle from '../../Login/LogoutGoogle';
import axios from 'axios';
import LogoutStatic from '../../Login/LogoutStatic';

const AppbarClient = () => {
    return(
    <React.Fragment>
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography style={{marginTop:'0.5%', font:'Roboto' , color:'', fontWeight:''}} variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
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
                <Link
                    variant="button"
                    color="text.primary"
                    href="/Booking"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    Booking
                </Link>
                </nav>

                {/**Logout button */}
                <LogoutGoogle />
    
            </Toolbar>
            
        </AppBar>
    </React.Fragment>
    );
}
export default AppbarClient;