package com.example.simplesurfbackendms1.controllers;

import com.example.simplesurfbackendms1.models.ClientId;
import com.example.simplesurfbackendms1.models.InstructorId;
import com.example.simplesurfbackendms1.models.Reservation;
import com.example.simplesurfbackendms1.models.ReservationId;
import com.example.simplesurfbackendms1.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
                if(checkIfDateIsPassed(reservation)){
                    return "pastDate";
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
    }

    @PostMapping(value = "/reservationsByClient", consumes = "application/json", produces = "application/json")
    public List<Reservation> listByClient(@RequestBody ClientId ci){
        //System.out.println(ci.toString());
        List<Reservation> myReservations = getReservations();
        List<Reservation> myClientReservations = new ArrayList<>();
        Long requestedId = ci.getClientId();
        //System.out.println("Client id di cui trovare le reservations "+requestedId);
        for(int i = 0; i < myReservations.size(); i++){
            Reservation tempReservation = myReservations.get(i);
            Long tempClientId = tempReservation.getClientId();
            System.out.println("Client id analizzato "+tempClientId);
            if(tempClientId.equals(requestedId)){
                System.out.println("entro");
                myClientReservations.add(tempReservation);
            }
        }

        return myClientReservations;
    }

    @PostMapping(value = "/reservationsByInstructor", consumes = "application/json", produces = "application/json")
    public List<Reservation> listByInstructor(@RequestBody InstructorId ii){
        List<Reservation> myReservations = getReservations();
        List<Reservation> myInstructorReservations = new ArrayList<>();
        Long requestedId = ii.getInstructorId();
        for(int i = 0; i < myReservations.size(); i++){
            Reservation tempReservation = myReservations.get(i);
            Long tempInstructorId = tempReservation.getInstructorId();
            //System.out.println("Client id analizzato "+tempInstructorId);
            if(tempInstructorId.equals(requestedId)){
                //System.out.println("entro");
                myInstructorReservations.add(tempReservation);
            }
        }
        return myInstructorReservations;
    }

    @PostMapping(value = "/reservations/deleteById", consumes = "application/json", produces = "application/json")
    public void deleteById(@RequestBody ReservationId ri){
        Long requestedId = ri.getReservationId();
        reservationRepository.deleteById(requestedId);
    }
    /**##############################################################################*/

    private List<Reservation> getReservations(){
        List<Reservation> list = reservationRepository.findAll();
        return list;
    }

    private boolean checkIfReservationExists(Reservation reservation){

        boolean ret=false;
        List<Reservation> myReservationsList = getReservations();
        for(int i = 0 ; i < myReservationsList.size();i++){
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

            if(
                clientIdNew.equals(clientIdOld)&&
                instructorIdNew.equals(instructorIdOld)&&
                reservationYearNew.equals(reservationYearOld)  &&
                reservationMonthNew.equals(reservationMonthOld)  &&
                reservationDayNew.equals(reservationDayOld)  &&
                reservationSlotNew.equals(reservationSlotOld)
            ){
                ret=true;
            }
        }
        return ret;
    }

    private boolean checkIfDateIsPassed(Reservation reservation){
        boolean ret=false;

        String reservationYearNew=reservation.getYear();
        String reservationMonthNew=reservation.getMonth();
        String reservationDayNew=reservation.getDay();
        int reservationYear = Integer.parseInt(reservationYearNew);
        int reservationMonth = Integer.parseInt(reservationMonthNew);
        int reservationDay = Integer.parseInt(reservationDayNew);

        LocalDate todaysDate = LocalDate.now();
        int todayYear = todaysDate.getYear();
        int todayMonth = todaysDate.getMonthValue()-1;
        int todayDay = todaysDate.getDayOfMonth();
        if(reservationYear>todayYear){
        }else{
           if(reservationYear<todayYear){
               ret = true;
           }else{
               if(reservationMonth>todayMonth){
               }else{
                   if(reservationMonth<todayMonth){
                       ret=true;
                   }else{
                       if(reservationDay<=todayDay){
                           ret=true;
                       }
                   }
               }
           }
        }

        return ret;
    }









}
