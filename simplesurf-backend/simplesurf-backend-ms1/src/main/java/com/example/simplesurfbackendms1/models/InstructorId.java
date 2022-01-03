package com.example.simplesurfbackendms1.models;

public class InstructorId {
    Long instructorId;

    public InstructorId() {
    }

    public InstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }

    public Long getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(Long instructorId) {
        this.instructorId = instructorId;
    }

    @Override
    public String toString() {
        return "InstructorId{" +
                "instructorId=" + instructorId +
                '}';
    }
}
