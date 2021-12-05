import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Copyright from './Copyright.js';
import Link from '@mui/material/Link';

function Footer(){
    return(
      <React.Fragment>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            <Link variant="h5" align="center" color="text.secondary" component="p" onClick={() => {
              alert('Contact us!')
            }}>
              Contact us
            </Link>
          </Grid>
          
      
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </React.Fragment>
    );
}

export default Footer;