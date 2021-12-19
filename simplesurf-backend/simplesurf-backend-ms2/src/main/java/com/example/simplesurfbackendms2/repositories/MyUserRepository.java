package com.example.simplesurfbackendms2.repositories;

import com.example.simplesurfbackendms2.models.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyUserRepository extends JpaRepository<MyUser,Long> {
}
