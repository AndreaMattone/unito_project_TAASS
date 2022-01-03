package com.example.simplesurfbackendms1.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long clientId;
    private Long instructorId;
    private String year;
    private String month;
    private String day;
    private String slot;


    public Reservation() {
    }
    public Reservation(Long clientId, Long instructorId, String year, String month, String day, String slot) {
        this.clientId = clientId;
        this.instructorId = instructorId;
        this.year = year;
        this.month = month;
        this.day = day;
        this.slot = slot;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getClientId() {
        return clientId;
    }
    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }
    public Long getInstructorId() {
        return instructorId;
    }
    public void setInstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }
    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }
    public String getMonth() {
        return month;
    }
    public void setMonth(String month) {
        this.month = month;
    }
    public String getDay() {
        return day;
    }
    public void setDay(String day) {
        this.day = day;
    }
    public String getSlot() {
        return slot;
    }
    public void setSlot(String slot) {
        this.slot = slot;
    }

    @Override
    public String toString() {
        return "{" +
                "id=" + id +
                ", clientId=" + clientId +
                ", instructorId=" + instructorId +
                ", year='" + year + '\'' +
                ", month='" + month + '\'' +
                ", day='" + day + '\'' +
                ", slot='" + slot + '\'' +
                '}';
    }
}
