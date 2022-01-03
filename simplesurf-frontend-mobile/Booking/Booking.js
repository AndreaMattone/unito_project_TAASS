import { StyleSheet, Text, View, FlatList, Button,Alert  } from 'react-native';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function Booking  (props)  {

    const datas = { "instructorId": props.loggedId};
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

         })
         .catch(function (error) {
             console.log(error);
          });

    }

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

    const [selectedDateOnCalendar, setSelectedDateOnCalendar] = useState(new Date());
    let selectedDay = selectedDateOnCalendar.getDate(); //giorno del mese
    let selectedMonth = selectedDateOnCalendar.getMonth(); //gennaio 0, lunedi 1, martedi 2...
    let selectedYear = selectedDateOnCalendar.getFullYear(); //2021

    return(
        <View style={styles.container}>
            <Text style={{marginTop:'1%',marginBottom:'1px'}}>Choose Slot</Text>
            <Calendar
                    onChange={setSelectedDateOnCalendar}
                    value={selectedDateOnCalendar}
            /> 
            <View>
                {instructorReservations[0].map(e => {
                     var today=new Date();
                     var todayDay=today.getDate();
                     var todayMonth=today.getMonth();
                     var todayYear=today.getFullYear();
                     if(e.year.localeCompare(Number(selectedYear))==0 && e.month.localeCompare(Number(selectedMonth))==0 && e.day.localeCompare(Number(selectedDay))==0){
                      
                        return <div style={{marginBottom:'5%', border:'solid 1px', borderColor:'#0065c9', borderRadius:'25px'}} key={Math.random()}>
                            <p>Reservation number [{e.id}] in date [{e.year}/{e.month}/{e.day}] by client [{e.clientId}] with instructor [{e.instructorId}] in slot [{e.slot}]</p>
                            <Button onClick={()=>onClickAction(e.id)} style={{color:'red'}}>Delete</Button>
                            <Button
                                onPress={()=>onClickAction(e.id)}
                                title="Delete"
                                color=""
                            />
                            </div>                                    
                            }
                        }
                        )
                }
            </View>
            
        </View>
    );
}