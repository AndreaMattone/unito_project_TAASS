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

const datas = { "clientId": Number(window.sessionStorage.getItem("loggedId"))};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const Account=()=>{
    const [clientReservations, setClientReservations] = useState(
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

    useEffect(() => {
        getClientReservations();
    }, []);
    function getClientReservations(){
        axios.post('http://localhost:8080/api/v1/reservationsByClient',datas)
        .then(function (response) {
          const datas = response.data;
          //console.log(datas);
          setClientReservations(clientReservations => [datas])
         })
         .catch(function (error) {
             console.log(error);
          });
      }

      const [selectedDateOnCalendar, setSelectedDateOnCalendar] = useState(new Date());
      let selectedDay = selectedDateOnCalendar.getDate(); //giorno del mese
      let selectedMonth = selectedDateOnCalendar.getMonth(); //gennaio 0, lunedi 1, martedi 2...
      let selectedYear = selectedDateOnCalendar.getFullYear(); //2021

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
                    MyAccount
                </Typography>
            </Container>

            { /** ################################ Choose date ################################ */ }
            <div align="center">      
                <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
                    <Calendar
                        onChange={setSelectedDateOnCalendar}
                        value={selectedDateOnCalendar}
                    />
                </Container>
            </div>
            <div align="center">
                <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
                        {clientReservations[0].map(e => {
                                    var today=new Date();
                                    var todayDay=today.getDate();
                                    var todayMonth=today.getMonth();
                                    var todayYear=today.getFullYear();
                                    if(e.year.localeCompare(Number(selectedYear))==0 && e.month.localeCompare(Number(selectedMonth))==0 && e.day.localeCompare(Number(selectedDay))==0){
                                        return <div style={{marginBottom:'5%', border:'solid 1px', borderColor:'#0065c9', borderRadius:'25px'}} key={Math.random()}>
                                            <p>Reservation number [{e.id}] in date [{e.year}/{e.month}/{e.day}] by client [{e.clientId}] with instructor [{e.instructorId}] in slot [{e.slot}]</p>
                                            <Button onClick={()=>onClickAction(e.id)} style={{color:'red'}}>Delete</Button>
                                            </div>                                    
                                    }
                                }
                            )
                        }
                </Container>
                
            </div>
        </React.Fragment>
    );

}

export default Account;