import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Tests () {
 
const datas =
  { 
    "id":0,
    "emailMyUser" : "/",
    "isLog": "/",
    "usrResponsailities": "/"
}
const datasModified =
{ 
  "id":0,
  "emailMyUser" : "/",
  "isLog": "/",
  "usrResponsailities": "/"
}
function testPost(){
    axios.post('http://localhost:3001/api/v1/myUsers/create', datas)
    .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
         console.log(error);
      });
}
function testGet(){
      axios.get('http://localhost:3001/api/v1/myUsers')
      .then(response => console.log(response.data));
}
function testGetClients(){
  axios.get('http://localhost:3001/api/v1/myClients')
  .then(response => console.log(response.data));
}
function testGetInstructors(){
  axios.get('http://localhost:3001/api/v1/myInstructors')
  .then(response => console.log(response.data));
}
function testUpdate(){
    axios.post('http://localhost:3001/api/v1/myUsers/update', datasModified)
    .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
         console.log(error);
      });
}
function testIfExists(){
    axios.post('http://localhost:3001/api/v1/myUsers/checkIfUserExists', datas)
    .then(function (response) {
      console.log(response);
      console.log(response.data);
     })
     .catch(function (error) {
         console.log(error);
      });
}
function testResp(){
  axios.post('http://localhost:3001/api/v1/myUsers/getResp', datas)
  .then(function (response) {
    console.log(response);
    console.log(response.data);
   })
   .catch(function (error) {
       console.log(error);
    });
}

const [value, onChange] = useState(new Date());


  return (
    <React.Fragment>
      <div style={{margin:"30px"}}>
        <Button onClick={testPost} variant="outlined">testPost</Button>
        <Button onClick={testGet} variant="outlined" >testGet</Button>
        <Button onClick={testGetClients} variant="outlined" >testGetClients</Button>
        <Button onClick={testGetInstructors} variant="outlined" >testGetInstructors</Button>
        <Button onClick={testUpdate} variant="outlined" >testUpdate</Button>
        <Button onClick={testIfExists} variant="outlined" >testIfExists</Button>
        <Button onClick={testResp} variant="outlined" >testResp</Button>
      </div>

      <div  style={{margin:"30px"}}>
      <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
      </div>
    </React.Fragment>
    
  );


}

export default Tests;





