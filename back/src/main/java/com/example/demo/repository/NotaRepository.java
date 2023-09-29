package com.example.demo.repository;

import com.example.demo.model.Nota;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NotaRepository extends JpaRepository<Nota, Integer> {

    @Override
    List<Nota> findAll();


}
