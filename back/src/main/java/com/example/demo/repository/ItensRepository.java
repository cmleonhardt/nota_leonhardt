package com.example.demo.repository;

import com.example.demo.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ItensRepository extends JpaRepository<Item, Integer> {

    @Override
    List<Item> findAll();

    Item findById(Optional<Item> id);


}
