package com.example.simplesurfbackendms1.controllers;

import com.example.simplesurfbackendms1.models.Reservation;
import com.example.simplesurfbackendms1.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping("/reservations")
    public List<Reservation> list() { return reservationRepository.findAll(); }

    @PostMapping(value = "/reservations/create", consumes = "application/json", produces = "application/json")
    public String create(@RequestBody Reservation reservation){

        if(reservation.getClientId()==null || reservation.getInstructorId()==0 || reservation.getInstructorId()==null ||
            reservation.getYear()==null || reservation.getMonth()==null || reservation.getMonth()==null || reservation.getDay()==null ||
                reservation.getSlot()==null){
            return "ko";
        }else{
            if(checkIfReservationExists(reservation)){
                return "resExistYet";
            }else{
                Long clientId = reservation.getClientId();
                Long instructorId = reservation.getInstructorId();
                String year = reservation.getYear();
                String month = reservation.getMonth();
                String day = reservation.getDay();
                String slot = reservation.getSlot();
                Reservation toAdd = new Reservation(clientId,instructorId,year,month,day,slot);
                reservationRepository.save(toAdd);
                return "ok";
            }
        }
    }

    /**##############################################################################*/

    private List<Reservation> getReservations(){
        List<Reservation> list = reservationRepository.findAll();
        return list;
    }

    private boolean checkIfReservationExists(Reservation reservation){
        System.out.println("Reservation richiesta: " + reservation.toString());
        boolean ret=false;
        List<Reservation> myReservationsList = getReservations();
        for(int i = 0 ; i < myReservationsList.size();i++){
            System.out.println("Comparo con: " + myReservationsList.get(i));
            Reservation temp = myReservationsList.get(i);
            Long clientIdNew=reservation.getClientId();
            Long clientIdOld=temp.getClientId();
            Long instructorIdNew=reservation.getInstructorId();
            Long instructorIdOld=temp.getInstructorId();
            String reservationYearNew=reservation.getYear();
            String reservationYearOld=temp.getYear();
            String reservationMonthNew=reservation.getMonth();
            String reservationMonthOld=temp.getMonth();
            String reservationDayNew=reservation.getDay();
            String reservationDayOld=temp.getDay();
            String reservationSlotNew=reservation.getSlot();
            String reservationSlotOld=temp.getSlot();
            System.out.println(clientIdNew == clientIdOld);
            System.out.println(instructorIdNew == instructorIdOld);
            System.out.println(reservationYearNew.equals(reservationYearOld));
            System.out.println(reservationMonthNew.equals(reservationMonthOld));
            System.out.println(reservationDayNew.equals(reservationDayOld));
            System.out.println(reservationSlotNew.equals(reservationSlotOld));

            if(
                clientIdNew.equals(clientIdOld)&&
                instructorIdNew.equals(instructorIdOld)&&
                reservationYearNew.equals(reservationYearOld)  &&
                reservationMonthNew.equals(reservationMonthOld)  &&
                reservationDayNew.equals(reservationDayOld)  &&
                reservationSlotNew.equals(reservationSlotOld)
            ){
                System.out.println("true");
                ret=true;
            }
        }
        return ret;
    }
}
