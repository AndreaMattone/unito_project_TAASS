import { StyleSheet, Text, View, FlatList, Button,  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-web';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  const Stack = createNativeStackNavigator();

export default function Login (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginText, setLoginText] = useState("");
    function localLogin(){
        //Check if user is registered
        if(username.localeCompare("")==0){
          setLoginText("Incorrect Username");
        }else{
          if(password.localeCompare("")==0){
            setLoginText("Incorrect Password");
          }else{
            var datas =
              { 
                "emailMyUser" : username,
                "passwordMyUser" : password,
              }
            axios.post('http://localhost:3001/api/v1/myUsers/checkIfRegisteredAndLogin', datas)
            .then(function (response) {
              console.log(response.data);
              if(response.data.toString().localeCompare("registeredAndKoPsw")===0){
                //wrong password
                setLoginText("Wrong password!");
              }else if(response.data.toString().localeCompare("notRegistered")===0){
                //not registered
                setLoginText("Not Registered!");
              }else{
                //getUserDataByUsername
                //setLoggedId
                //window.sessionStorage.setItem("loggedId",response.data.toString());
                //window.location.reload();
                setLoginText("");
                props.navigation.navigate('Profile', { id: response.data })
              }
            })
            .catch(function (error) {
              console.log(error);
            }); 
          }
        }
      }
    return(
        <View>
            <Text numberOfLines={5}>Username</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
            />
            <Text numberOfLines={5}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
            />
            <Button
                onPress={localLogin}
                title="Login"
                color="#841584"
            />
            <Text numberOfLines={5}>{loginText}</Text>
        </View>
    );
}
