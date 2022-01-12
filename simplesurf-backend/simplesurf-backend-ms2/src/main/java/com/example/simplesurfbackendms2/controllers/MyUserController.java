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
@RequestMapping("api/v2")
public class MyUserController {

    @Autowired
    private MyUserRepository myUserRepository;

    /**################################# GET ################################*/

    /*Get a list of all the users*/
    @GetMapping("/myUsers")
    public List<MyUser> list() {
        return myUserRepository.findAll();
    }

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

    @GetMapping("/test")
    public void test() {
        System.out.println("Test");
    }

    /**################################# POST ###############################*/

    /*Create a new user in the DB*/
    @PostMapping(value = "/myUsers/create", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody MyUser myUser) {
        System.out.println(myUser.toString());
        if(myUser.getEmailMyUser()!=null &&
                myUser.getIsLog()!=null && myUser.getUsrResponsailities()!=null){
            String email = (String)myUser.getEmailMyUser();
            String password = (String)myUser.getPasswordMyUser();
            String isLogged = (String)myUser.getIsLog();
            String usrResp = (String)myUser.getUsrResponsailities();
            MyUser toAdd = new MyUser(email,password,isLogged,usrResp);
            myUserRepository.save(toAdd);
        }else{
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

    /*Update the informations of a User if is present, or create a new one if is not present yet*/
    @PostMapping(value = "/myUsers/update", consumes = "application/json", produces = "application/json")
    public void updateUser(@RequestBody MyUser myUser) {
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        if(myUserFromDbOptional.isEmpty()){
            /*if(myUser.getId()!=null && myUser.getEmailMyUser()!=null && myUser.getPasswordMyUser()!=null &&
                    myUser.getIsLog()!=null && myUser.getUsrResponsailities()!=null){
                Long id = (Long)myUser.getId();
                String email = (String)myUser.getEmailMyUser();
                String pssw = (String)myUser.getPasswordMyUser();
                String isLogged = (String)myUser.getIsLog();
                String usrResp = (String)myUser.getUsrResponsailities();
                MyUser toAdd = new MyUser(email,pssw,isLogged,usrResp);
                myUserRepository.save(toAdd);
            }else{
                //TODO SEGNALARE L'ERRORE
            }*/
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

    /*given an id return the state (logged or not) of an user*/
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

    @PostMapping(value = "/myUsers/checkIfRegisteredAndLogin", consumes = "application/json", produces = "application/json")
    public String checkIfRegisteredAndLogin(@RequestBody MyUser myUser){
        List<MyUser> list = myUserRepository.findAll();
        String emailToCheck = myUser.getEmailMyUser();
        String passwordToCheck = myUser.getPasswordMyUser();
        String ret = "notRegistered";
        for(int i = 0 ; i < list.size();i++){
            MyUser userTmp = list.get(i);
            String tempEmail = userTmp.getEmailMyUser();
            String tempPsw = userTmp.getPasswordMyUser();
            if(tempEmail.equals(emailToCheck)){
                if(tempPsw.equals(passwordToCheck) && !passwordToCheck.equals("")){
                    System.out.println("Printing usrTemp: " + userTmp.toString());
                    String toRet = userTmp.getId()+"";
                    System.out.println(toRet);
                    localUpdateUser(userTmp);
                    ret = toRet;
                }else{
                    ret = "registeredAndKoPsw";
                }
            }
        }
        return ret;
    }

    private void localUpdateUser(MyUser myUser){
        System.out.println(myUser.toString());
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        MyUser myUserFromDb = myUserFromDbOptional.get();
        myUserFromDb.setIsLog("true");
        myUserRepository.save(myUserFromDb);
    }

    @PostMapping(value = "/myUsers/loginGoogle", consumes = "application/json", produces = "application/json")
    public String loginGoogle(@RequestBody MyUser myUser){
        List<MyUser> list = myUserRepository.findAll();
        MyUser existingUser = null;
        boolean usrExist = false;
        String ret = "";
        for(int i = 0 ; i < list.size();i++){
            MyUser userTmp = list.get(i);
            String tempMail = userTmp.getEmailMyUser();
            String mailGiven = myUser.getEmailMyUser();
            if(tempMail.equals(mailGiven)){
                usrExist=true;
                existingUser=userTmp;
            }
        }

        if (usrExist == true) {
            localUpdateUser(existingUser);
            ret = existingUser.getId()+"";
        }else{
            String email = (String)myUser.getEmailMyUser();
            String password = "";
            String isLogged = (String)myUser.getIsLog();
            String usrResp = (String)myUser.getUsrResponsailities();
            MyUser toAdd = new MyUser(email,password,isLogged,usrResp);
            myUserRepository.save(toAdd);
            List<MyUser> updatedList = myUserRepository.findAll();
            for(int i = 0 ; i < updatedList.size();i++){
                MyUser userTmp = updatedList.get(i);
                String m = userTmp.getEmailMyUser();
                if(m.equals(email)){
                    ret=userTmp.getId()+"";
                }
            }
        }

        return ret;
    }


}












