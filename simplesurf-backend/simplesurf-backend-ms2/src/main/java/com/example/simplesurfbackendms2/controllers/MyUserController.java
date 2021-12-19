package com.example.simplesurfbackendms2.controllers;

import com.example.simplesurfbackendms2.repositories.MyUserRepository;
import com.example.simplesurfbackendms2.models.MyUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1")
public class MyUserController {

    @Autowired
    private MyUserRepository myUserRepository;

    @GetMapping("/myUsers")
    public List<MyUser> list() { return myUserRepository.findAll(); }


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
        //System.out.println("Part 1: " + id + " , " + email + " , " + isLogged);
        MyUser toAdd = new MyUser(id,email,isLogged);
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
        Long searchId = myUser.getId();
        return myUserRepository.existsById(searchId);
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
            myUserRepository.save(myUserFromDb);
        }
        //System.out.println(myUserFromDbOptional.toString());
        /*MyUser myUserFromDb = myUserFromDbOptional.get();
        myUserFromDb.setEmailMyUser(myUser.getEmailMyUser());
        myUserFromDb.setLoggedIn(userStatus);
        myUserRepository.save(myUserFromDb);*/
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
}
