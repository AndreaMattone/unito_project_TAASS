package com.example.simplesurfbackendms2.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MyUser {

    @Id
    private Long id;
    private String emailMyUser;
    private String isLog;
    private String usrResponsailities;

    public MyUser() {
    }

    public MyUser(Long id, String emailMyUser, String isLog, String usrResponsailities) {
        this.id = id;
        this.emailMyUser = emailMyUser;
        this.isLog = isLog;
        this.usrResponsailities = usrResponsailities;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEmailMyUser() {
        return emailMyUser;
    }
    public void setEmailMyUser(String emailMyUser) {
        this.emailMyUser = emailMyUser;
    }
    public String getIsLog() {
        return isLog;
    }
    public void setIsLog(String loggedIn) {
        isLog = loggedIn;
    }
    public String getUsrResponsailities() {
        return usrResponsailities;
    }
    public void setUsrResponsailities(String usrResponsailities) {
        this.usrResponsailities = usrResponsailities;
    }

    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", emailMyUser='" + emailMyUser + '\'' +
                ", isLog='" + isLog + '\'' +
                ", usrResponsailities='" + usrResponsailities + '\'' +
                '}';
    }
}
