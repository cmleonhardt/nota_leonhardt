package com.example.demo.repository;

import com.example.demo.model.Itens;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ItensRepository extends JpaRepository<Itens, Integer> {

    @Override
    List<Itens> findAll();

    Itens findById(Optional<Itens> id);


}
