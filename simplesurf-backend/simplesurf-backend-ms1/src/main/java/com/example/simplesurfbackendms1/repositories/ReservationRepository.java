package com.example.simplesurfbackendms1.repositories;

import com.example.simplesurfbackendms1.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
