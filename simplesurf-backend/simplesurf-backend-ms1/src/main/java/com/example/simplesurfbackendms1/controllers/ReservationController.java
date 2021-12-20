package com.example.simplesurfbackendms1.controllers;

import com.example.simplesurfbackendms1.models.Reservation;
import com.example.simplesurfbackendms1.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping("/reservations")
    public List<Reservation> list() { return reservationRepository.findAll(); }

    @PostMapping(value = "/reservations/create", consumes = "application/json", produces = "application/json")
    public void create(@RequestBody Reservation reservation){
        Long clientId = (Long)reservation.getClientId();
        Long instructorId = (Long)reservation.getInstructorId();
        String year = (String)reservation.getYear();
        String month = (String)reservation.getMonth();
        String day = (String)reservation.getDay();
        String slot = (String)reservation.getSlot();
        Reservation toAdd = new Reservation(clientId,instructorId,year,month,day,slot);
        reservationRepository.save(toAdd);
    }
}
