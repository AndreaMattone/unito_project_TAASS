package com.example.simplesurfbackendms2.controllers;

import com.example.simplesurfbackendms2.repositories.MyUserRepository;
import com.example.simplesurfbackendms2.models.MyUser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class MyUserController {

    @Autowired
    private MyUserRepository myUserRepository;

    /**################################# GET ################################*/

    /*Get a list of all the users*/
    @GetMapping("/myUsers")
    public List<MyUser> list() { return myUserRepository.findAll(); }

    /*Get a list of all the users with role "client"*/
    @GetMapping("/myClients")
    public List<MyUser> listClient() {
        List<MyUser> list = myUserRepository.findAll();
        List<MyUser> clientsList = new ArrayList<>();
        for(int i = 0 ; i < list.size();i++){
            MyUser userTmp = list.get(i);
            String tempResp = userTmp.getUsrResponsailities();
            if(tempResp.equals("user")){
                clientsList.add(userTmp);
            }
        }
        //System.out.println(clientsList);
        return clientsList;
    }

    /*Get a list of all the users with role "instructor"*/
    @GetMapping("/myInstructors")
    public List<MyUser> listInstructors() {
        List<MyUser> list = myUserRepository.findAll();
        List<MyUser> instructorsList = new ArrayList<>();
        for(int i = 0 ; i < list.size();i++){
            MyUser userTmp = list.get(i);
            String tempResp = userTmp.getUsrResponsailities();
            if(tempResp.equals("instructor")){
                instructorsList.add(userTmp);
            }
        }
        //System.out.println(instructorsList);
        return instructorsList;
    }

    /**################################# POST ###############################*/

    /*Create a new user in the DB*/
    @PostMapping(value = "/myUsers/create", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody MyUser myUser) {
        if(myUser.getId()!=null && myUser.getEmailMyUser()!=null &&
                myUser.getIsLog()!=null && myUser.getUsrResponsailities()!=null){
            Long id = (Long)myUser.getId();
            String email = (String)myUser.getEmailMyUser();
            String isLogged = (String)myUser.getIsLog();
            String usrResp = (String)myUser.getUsrResponsailities();
            MyUser toAdd = new MyUser(id,email,isLogged,usrResp);
            myUserRepository.save(toAdd);
        }else{
            //TODO SEGNALARE L'ERRORE
        }

    }

    /*Update the informations of a User if is present, or create a new one if is not present yet*/
    @PostMapping(value = "/myUsers/update", consumes = "application/json", produces = "application/json")
    public void updateUser(@RequestBody MyUser myUser) {
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        if(myUserFromDbOptional.isEmpty()){
            if(myUser.getId()!=null && myUser.getEmailMyUser()!=null &&
                    myUser.getIsLog()!=null && myUser.getUsrResponsailities()!=null){
                Long id = (Long)myUser.getId();
                String email = (String)myUser.getEmailMyUser();
                String isLogged = (String)myUser.getIsLog();
                String usrResp = (String)myUser.getUsrResponsailities();
                MyUser toAdd = new MyUser(id,email,isLogged,usrResp);
                myUserRepository.save(toAdd);
            }else{
                //TODO SEGNALARE L'ERRORE
            }
        }else{
            MyUser myUserFromDb = myUserFromDbOptional.get();
            if(myUser.getEmailMyUser()!=null){
                myUserFromDb.setEmailMyUser(myUser.getEmailMyUser());
            }
            if(myUser.getIsLog()!=null){
                myUserFromDb.setIsLog(myUser.getIsLog());
            }
            if(myUser.getUsrResponsailities()!=null){
                myUserFromDb.setUsrResponsailities(myUser.getUsrResponsailities());
            }
            myUserRepository.save(myUserFromDb);
        }
    }

    /*Return true if the given id of the User is present in the DB
     { id = X }*/
    /*Return true if the user exists*/
    @PostMapping(value = "/myUsers/checkIfUserExists", consumes = "application/json", produces = "application/json")
    public boolean checkIfUserExists(@RequestBody MyUser myUser) throws JsonProcessingException {
        Long id = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(id);
        if(myUserFromDbOptional.isEmpty()){
            return false;
        }else{
            return true;
        }
    }

    /*return the state (logged or not) of an user*/
    @PostMapping(value = "/myUsers/isLoggedIn", consumes = "application/json", produces = "application/json")
    public boolean isLoggedIn(@RequestBody MyUser myUser){
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        MyUser myUserFromDb = myUserFromDbOptional.get();
        if(myUserFromDb.getIsLog().equals("true")){
            return true;
        }else{
            return false;
        }
    }

    /*Given an id return the User Responsability*/
    @PostMapping(value = "/myUsers/getResp", consumes = "application/json", produces = "application/json")
    public String getResponsability(@RequestBody MyUser myUser){
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        if(myUserFromDbOptional.isEmpty()){
            return "user not exist";
        }else{
            MyUser myUserFromDb = myUserFromDbOptional.get();
            String resp = myUserFromDb.getUsrResponsailities();
            return resp;
        }
    }

    /*Given an id return the User Info*/
    @PostMapping(value = "/myUsers/getMyUserInfo", consumes = "application/json", produces = "application/json")
    public MyUser getMyUserInfo(@RequestBody MyUser myUser){
        Long id = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(id);
        if(myUserFromDbOptional.isEmpty()){
            return null;
        }else{
            MyUser myUserFromDb = myUserFromDbOptional.get();
            return myUserFromDb;
        }
    }
}
