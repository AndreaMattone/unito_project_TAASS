import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';

function Booking(){
    
    useEffect(() => {
        getInstructorsData();
    }, []);
    async function getInstructorsData(){
        try{
            const response = await fetch(
                'http://localhost:3001/api/v1/myInstructors'
            );
            const data = await response.json();
            setInstructorsList(data);
        }catch(error){}
    }

    const [selectedSlot, setSelectedSlot] = React.useState('morning');
    const [instructorsList, setInstructorsList ] = React.useState([]);
    const [instructor, setInstructor] = React.useState('');
    const [selectedDateOnCalendar, setSelectedDateOnCalendar] = useState(new Date());
    let selectedDay = selectedDateOnCalendar.getDate(); //giorno del mese
    let selectedMonth = selectedDateOnCalendar.getMonth(); //gennaio 0, lunedi 1, martedi 2...
    let selectedYear = selectedDateOnCalendar.getFullYear(); //2021

    const handleChangeChooseInstructor = (event) => {
        setInstructor(event.target.value);
    };
    const handleChangeChooseSlot = (event) => {
        setSelectedSlot(event.target.value);
    };


    const postReservation = () =>{
        /*console.log("RESERVE in date " + "Day: " + selectedDay + 
            " Month: " + selectedMonth + " Year: " + selectedYear + " in the slot: " + 
                selectedSlot + " with the instructor: " + instructor + " for the client: " + 
                    window.sessionStorage.getItem("loggedId"));*/
        /**Adding the reservation in the database */
        const datas =
        { 
            "clientId": Number(window.sessionStorage.getItem("loggedId")),
            "instructorId": Number(instructor),
            "year": String(selectedYear),
            "month": String(selectedMonth),
            "day" : String(selectedDay),
            "slot" : String(selectedSlot)
        }
        axios.post('http://localhost:8080/api/v1/reservations/create', datas)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
       
    }







    return(
            <React.Fragment>
                { /** ################################ Choose instructor ################################ */ }
                <div align="center">
                   
                    <Container disableGutters maxWidth="xs" component="main" sx={{ pt: 2, pb: 2 }} >
                        
                        <Box sx={{ minWidth:120 }}>
                            <Typography style={{float:"left", marginBottom:'3%'}}>Choose instructor, date and slot</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Instructors</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={instructor}
                                label="Instructors"
                                onChange={handleChangeChooseInstructor}
                                >
                                    {instructorsList.map(e => (
                                        <MenuItem 
                                            key={e.id}
                                            value={e.id}
                                        >{e.emailMyUser}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Container>
                </div>
                
                { /** ################################ Choose date ################################ */ }
                <div align="center">      
                    <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
                        <Calendar
                            onChange={setSelectedDateOnCalendar}
                            value={selectedDateOnCalendar}
                        />
                    </Container>
                </div>

                { /** ################################ Choose slot ################################ */ }
                <div align="center">      
                    <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
                        <FormControl component="fieldset">
                            <FormLabel component="legend"></FormLabel>
                            <RadioGroup
                                aria-label="slot"
                                name="controlled-radio-buttons-group"
                                value={selectedSlot}
                                onChange={handleChangeChooseSlot}
                            >
                                <FormControlLabel value="morning" control={<Radio />} label="Morning" />
                                <FormControlLabel value="afternoon" control={<Radio />} label="Afternoon" />
                            </RadioGroup>
                        </FormControl>
                    </Container>
                </div>


                { /** ################################ Book reservation ################################ */ }
                <div align="center">
                <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }} >
                    <Button variant="outlined" onClick={postReservation}>Book</Button>
                </Container>
                </div>
                

            </React.Fragment>
    );
}

export default Booking;