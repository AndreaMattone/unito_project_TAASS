package com.example.simplesurfbackendms2.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MyUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String emailMyUser;
    private String passwordMyUser;
    private String isLog;
    private String usrResponsailities;

    public MyUser() {
    }

    public MyUser(String emailMyUser, String passwordMyUser, String isLog, String usrResponsailities) {
        this.emailMyUser = emailMyUser;
        this.passwordMyUser = passwordMyUser;
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
    public String getPasswordMyUser() {
        return passwordMyUser;
    }
    public void setPasswordMyUser(String passwordMyUser) {
        this.passwordMyUser = passwordMyUser;
    }
    public String getIsLog() {
        return isLog;
    }
    public void setIsLog(String isLog) {
        this.isLog = isLog;
    }

    public String getUsrResponsailities() {
        return usrResponsailities;
    }

    public void setUsrResponsailities(String usrResponsailities) {
        this.usrResponsailities = usrResponsailities;
    }

    @Override
    public String toString() {
        return "MyUser{" +
                "id=" + id +
                ", emailMyUser='" + emailMyUser + '\'' +
                ", passwordMyUser='" + passwordMyUser + '\'' +
                ", isLog='" + isLog + '\'' +
                ", usrResponsailities='" + usrResponsailities + '\'' +
                '}';
    }
}
