import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function Tests () {
 
const datas =
  { 
    "id":10,
  }
const datasModified =
{ 
  "id":10,
  "emailMyUser" : "/",
  "isLog": "/",
  "usrResponsailities": "/"
}


function test(){
  var datas =
          { 
            "emailMyUser" : 'a',
            "passwordMyUser" : 'a',
          }
        axios.post('http://localhost:3001/api/v2/myUsers/checkIfRegisteredAndLogin', datas)
        .then(function (response) {
          console.log(response.data);
          
          if(response.data.toString().localeCompare("registeredAndKoPsw")===0){
            //wrong password
          }else if(response.data.toString().localeCompare("notRegistered")===0){
            //not registered
          }else{
            //getUserDataByUsername
            //setLoggedId
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
          }
         })
         .catch(function (error) {
             console.log(error);
          });
}


function testPost(){
    axios.post('http://localhost:3001/api/v/myUsers/create', datas)
    .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
         console.log(error);
      });
}
function testGet(){
      axios.get('http://localhost:3001/api/v2/myUsers')
      .then(response => console.log(response.data));
}

function getUserInfo(){
  axios.post('http://localhost:3001/api/v2/myUsers/getMyUserInfo',datas)
  .then(function (response) {
    console.log(response);
   })
   .catch(function (error) {
       console.log(error);
    });
}
function testGetClients(){
  axios.get('http://localhost:3001/api/v2/myClients')
  .then(response => console.log(response.data));
}
function testGetInstructors(){
  axios.get('http://localhost:3001/api/v2/myInstructors')
  .then(response => console.log(response.data));
}
function testUpdate(){
    axios.post('http://localhost:3001/api/v2/myUsers/update', datasModified)
    .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
         console.log(error);
      });
}
function testIfExists(){
    axios.post('http://localhost:3001/api/v2/myUsers/checkIfUserExists', datas)
    .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
         console.log(error);
      });
}
function testResp(){
  axios.post('http://localhost:3001/api/v2/myUsers/getResp', datas)
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
<div style={{margin:'100px'}}>
      <Typography>Indica quante canzoni di ogni mood ha prodotto il seguente artista</Typography>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Artist" variant="outlined" />
    </Box>
    <Button>Commit</Button>
    </div>

      <div style={{margin:"30px"}}>
        <Button onClick={testPost} variant="outlined">testPost</Button>
        <Button onClick={testGet} variant="outlined" >testGet</Button>
        <Button onClick={testGetClients} variant="outlined" >testGetClients</Button>
        <Button onClick={testGetInstructors} variant="outlined" >testGetInstructors</Button>
        <Button onClick={testUpdate} variant="outlined" >testUpdate</Button>
        <Button onClick={testIfExists} variant="outlined" >testIfExists</Button>
        <Button onClick={testResp} variant="outlined" >testResp</Button>
        <Button onClick={getUserInfo} variant="outlined" >getUserInfo</Button>
        <Button onClick={test} variant="outlined" >test</Button>

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





