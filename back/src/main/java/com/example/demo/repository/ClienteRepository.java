package com.example.demo.repository;

import com.example.demo.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    @Override
    List<Cliente> findAll();


    Cliente findById(Optional<Cliente> id);
}
