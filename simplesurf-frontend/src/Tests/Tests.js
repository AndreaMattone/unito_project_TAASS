import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


function Tests () {
 
  const datas =
  { 
    "id":114494304946292876752/100000,
    "emailMyUser" : "siiiii1",
    "isLog": "true"
  }

   
const datasModified =
{ 
  "id":"114494304946292876753",
  "emailMyUser" : "noooooooo",
  "isLog": "false"
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


  return (
    <div>
       <Button onClick={testPost} >testPost</Button>
       <Button onClick={testGet} >testGet</Button>
       <Button onClick={testUpdate} >testUpdate</Button>
       <Button onClick={testIfExists} >testIfExists</Button>
    </div>
  );


}

export default Tests;





