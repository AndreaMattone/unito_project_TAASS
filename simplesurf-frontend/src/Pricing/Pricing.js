import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

/**Elenco delle cards al centro */
const tiers = [
    {
      title: 'Group Lessons',
      price: '30',
      description: [
        'Our Group Lessons are in controlled environment and all prices included Surf Board, wtsuit and insurance',
      ],
      buttonText: 'Get started',
      buttonVariant: 'outlined',
      onClickAction: ()=>{alert('clicked')},
    },
    {
      title: 'Private Group Lessons',
      subheader: '2 to 5 surfers',
      price: '45',
      description: [
        'Learn to surf with your group of friends in controlled envroiment and with the best instructors',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
      onClickAction: ()=>{alert('clicked')},
    },
    {
      title: 'Private Lessons',
      price: '70',
      description: [
        'Our Private Lessons for all levels of surfers, made for who want to focus on perfection',
      ],
      buttonText: 'Get started',
      buttonVariant: 'outlined',
      onClickAction: ()=>{alert('clicked')},
    },
  ];
  
function Pricing(){
  return(
    <React.Fragment>
      {/* Presentation */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Good vibes and passion for an incredible water experience
        </Typography>
      </Container>
      {/* End presentation */}

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                action={null}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                <Typography component="h2" variant="h3" color="text.primary">
                  ${tier.price}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  /lesson
                </Typography>
              </Box>
              <ul>
                {tier.description.map((line) => (
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={line}
                  >
                    {line}
                  </Typography>
                ))}
              </ul>
              </CardContent>
              <CardActions>
                <Button onClick={tier.onClickAction} fullWidth variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
        </Grid>
      ))}
        </Grid>
      </Container>

    </React.Fragment>
  );

}

export default Pricing;