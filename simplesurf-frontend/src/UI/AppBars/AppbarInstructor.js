import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LogoutGoogle from '../../Login/LogoutGoogle';
import axios from 'axios';
import LogoutStatic from '../../Login/LogoutStatic.js';
const AppbarInstructor = () => {
    return(
        <React.Fragment>
                    <AppBar
                        position="static"
                        color="default"
                        elevation={0}
                        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                    >
                        <Toolbar sx={{ flexWrap: 'wrap' }}>
                            <Typography style={{marginTop:'0.5%'}} variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                                SimpleSurf
                            </Typography>
                            {/**Barra nav links */}
                            <nav>
                            <Link
                                variant="button"
                                color="text.primary"
                                href="/Requests"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Requests
                            </Link>
                            </nav>
        
                            {/**Logout button */}
                            <LogoutStatic />
                
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
    );
}
export default AppbarInstructor;