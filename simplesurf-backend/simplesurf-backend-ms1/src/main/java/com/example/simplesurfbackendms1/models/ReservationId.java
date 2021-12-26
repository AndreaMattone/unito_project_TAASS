package com.example.simplesurfbackendms1.models;

public class ReservationId {
    Long reservationId;

    public ReservationId() {
    }

    public ReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }

    public Long getReservationId() {
        return reservationId;
    }

    public void setReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }

    @Override
    public String toString() {
        return "ReservationId{" +
                "reservationId=" + reservationId +
                '}';
    }
}
