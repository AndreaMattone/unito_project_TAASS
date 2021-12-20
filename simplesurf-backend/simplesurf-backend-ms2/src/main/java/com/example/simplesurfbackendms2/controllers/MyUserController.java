package com.example.simplesurfbackendms2.controllers;

import com.example.simplesurfbackendms2.repositories.MyUserRepository;
import com.example.simplesurfbackendms2.models.MyUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1")
public class MyUserController {

    @Autowired
    private MyUserRepository myUserRepository;


    /**
     * ################################# GET ################################
     *
     */
    @GetMapping("/myUsers")
    public List<MyUser> list() { return myUserRepository.findAll(); }

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


    /**
     * ################################# POST ###############################
     *
     */
    /**
     * Create a new User
     * @param myUser
     */
    @PostMapping(value = "/myUsers/create", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody MyUser myUser) {
        //System.out.println(myUser);
        Long id = (Long)myUser.getId();
        String email = (String)myUser.getEmailMyUser();
        String isLogged = (String)myUser.getIsLog();
        String usrResp = (String)myUser.getUsrResponsailities();
        //System.out.println("Part 1: " + id + " , " + email + " , " + isLogged);
        MyUser toAdd = new MyUser(id,email,isLogged,usrResp);
        //System.out.println("Part 2: " + toAdd);
        myUserRepository.save(toAdd);
    }

    /**
     * Check if a User is present yet
     * @param myUser
     * @return
     */
    @PostMapping(value = "/myUsers/checkIfUserExists", consumes = "application/json", produces = "application/json")
    public boolean checkIfUserExists(@RequestBody MyUser myUser){
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        if(myUserFromDbOptional.isEmpty()){
            return false;
        }else{
            return true;
        }
    }

    /**
     * Update a User state
     * @param myUser
     */
    @PostMapping(value = "/myUsers/update", consumes = "application/json", produces = "application/json")
    public void updateUser(@RequestBody MyUser myUser) {
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        if(myUserFromDbOptional.isEmpty()){
             myUserRepository.save(myUser);
        }else{
            MyUser myUserFromDb = myUserFromDbOptional.get();
            myUserFromDb.setEmailMyUser(myUser.getEmailMyUser());
            myUserFromDb.setIsLog(myUser.getIsLog());
            myUserFromDb.setUsrResponsailities(myUser.getUsrResponsailities());
            myUserRepository.save(myUserFromDb);
        }
    }

    /**
     * return if an User is loggedIn
     * @param myUser
     * @return
     */
    @PostMapping(value = "/myUsers/isLoggedIn", consumes = "application/json", produces = "application/json")
    public String isLoggedIn(@RequestBody MyUser myUser){
        Long userId = myUser.getId();
        Optional<MyUser> myUserFromDbOptional = myUserRepository.findById(userId);
        MyUser myUserFromDb = myUserFromDbOptional.get();
        return myUserFromDb.getIsLog();
    }

    /**
     * Given an ID get the responsability for the user
     * @param myUser
     * @return
     */
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





}
