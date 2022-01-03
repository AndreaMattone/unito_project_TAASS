import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Button, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Calendar from 'react-calendar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'react-calendar/dist/Calendar.css';

function Requests(){
    const datas = { "instructorId": Number(window.sessionStorage.getItem("loggedId"))};
    const [instructorReservations, setInstructorReservations] = useState(
        {
            '0':[{"id":0,
            "clientId" : 0,
            "instructorId" : 0,
            "year": "0",
            "month": "0",
            "day":"0",
            "slot":"0"}]
        }
    );
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        getInstructorReservations();
    }, []);
    function getInstructorReservations(){
        axios.post('http://localhost:8080/api/v1/reservationsByInstructor',datas)
        .then(function (response) {
          const datas = response.data;
          //console.log(datas);
          setInstructorReservations(instructorReservations => [datas])
         })
         .catch(function (error) {
             console.log(error);
          });
      }
      function onClickAction(e){
        const resDatas = {"reservationId": Number(e)}
        axios.post('http://localhost:8080/api/v1/reservations/deleteById',resDatas)
        .then(function (response) {
          console.log(response);
          window.location.reload();
         })
         .catch(function (error) {
             console.log(error);
          });

    }

    return(
        <React.Fragment>
             <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                component="h5"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
                >
                    Requests
                </Typography>
            </Container>
            <div align="center">
                <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
                        {instructorReservations[0].map(e => {
                                    return <div style={{marginBottom:'5%', border:'solid 1px', borderColor:'#0065c9', borderRadius:'25px'}} key={Math.random()}>
                                        <p>Reservation number [{e.id}] in date [{e.year}/{e.month}/{e.day}] by client [{e.clientId}] with instructor [{e.instructorId}] in slot [{e.slot}]</p>
                                        <Button onClick={()=>onClickAction(e.id)} style={{color:'red'}}>Delete</Button>
                                        </div>                                    
                                }
                            )
                        }
                </Container>
            </div>
        </React.Fragment>
    );
}





export default Requests;