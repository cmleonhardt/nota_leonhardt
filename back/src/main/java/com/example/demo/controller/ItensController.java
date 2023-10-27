package com.example.demo.controller;

import com.example.demo.model.Item;
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
    public Item getItem(@PathVariable Optional<Item> id){
        Item item = new Item();
        Optional<Item> it = Optional.ofNullable(repository.findById(id));
        if(it.isPresent()){
            return it.get();
        }
        return item;
    }

    @GetMapping("/itens")
    public List<Item> getItens() {
        List<Item> it = repository.findAll();
        return it;
    };

    @PostMapping("/new")
    public Item postItens(@RequestBody Item item) {
        if (item != null && item.getNumeroDoItem() != null
                && item.getQuantidade() != null
                && item.getValorDoItem() != null
                && item.getProduto() != null
                && item.getNota() != null) {
            repository.save(item);
        }
        return item;
    }


    @DeleteMapping("/{id}")
    public void deleteItens(@PathVariable Integer id){

        repository.deleteById(id);
    }

    @PutMapping("/")
    public Item updateItens(@RequestBody Item item){
        if (item != null && item.getNumeroDoItem() != null
                && item.getQuantidade() != null
                && item.getValorDoItem() != null
                && item.getProduto() != null
                && item.getNota() != null){
            repository.save(item);
        }
        return item;
    }
}
