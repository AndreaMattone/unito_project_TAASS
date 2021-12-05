import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function NotFound(){
    return(
        <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={9}>
                NOT FOUND!
              </Grid>
            </Grid>
        </Container>
    );
}

export default NotFound;