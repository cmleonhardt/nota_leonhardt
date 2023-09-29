package com.example.demo.controller;

import com.example.demo.model.Itens;
import com.example.demo.repository.ItensRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/itens")
public class ItensController {

    @Autowired
    private ItensRepository repository;

    @GetMapping("/{id}")
    public Itens getItem(@PathVariable Optional<Itens> id){
        Itens item = new Itens();
        Optional<Itens> it = Optional.ofNullable(repository.findById(id));
        if(it.isPresent()){
            return it.get();
        }
        return item;
    }

    @GetMapping("/itens")
    public List<Itens> getItens() {
        List<Itens> it = repository.findAll();
        return it;
    };

    @PostMapping("/new")
    public Itens postItens(@RequestBody Itens itens){
        repository.save(itens);
        return itens;
    }

    @DeleteMapping("/{id}")
    public void deleteItens(@PathVariable Integer id){

        repository.deleteById(id);
    }

    @PutMapping("/")
    public Itens updateItens(@RequestBody Itens itens){
        repository.save(itens);
        return itens;
    }
}
