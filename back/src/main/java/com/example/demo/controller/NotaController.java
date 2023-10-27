package com.example.demo.controller;

import com.example.demo.model.Item;
import com.example.demo.model.Nota;
import com.example.demo.repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/nota")
public class NotaController {

    @Autowired
    private NotaRepository repository;


    @GetMapping("/{id}")
    public Nota getNota(@PathVariable Integer id) {
        Nota not = new Nota();

        Optional<Nota> nota = repository.findById(id);
        if (nota.isPresent()) {
            return nota.get();
        }

        return not;
    }

    @GetMapping("/notas")
    public List<Nota> getNotas(){
        List<Nota> nota = repository.findAll();
        return nota;
    }

    @PostMapping("/new")
    public Nota postNota(@RequestBody Nota nota){
        if ( nota != null && nota.getItem() != null && !nota.getItem().isEmpty()){
            for (Item iten : nota.getItem()) {
               if ( iten.getNota() == null){
                   iten.setNota(nota);
               }
            }
        }
        if(nota != null && nota.getItem() != null && !nota.getItem().isEmpty()
            && nota.getNumero() != null
            && nota.getData() !=null
            && nota.getValorTotal() !=null
            && nota.getCliente() !=null){
            repository.save(nota);
        }
        return nota;
    }

    @DeleteMapping("/{id}")
    public void deleteNota(@PathVariable Integer id) {
        repository.deleteById(id);
    }

    @PutMapping("/")
    public Nota updateNota(@RequestBody Nota nota){
        if ( nota != null && nota.getItem() != null && !nota.getItem().isEmpty()){
            for (Item iten : nota.getItem()) {
                if ( iten.getNota() == null){
                    iten.setNota(nota);
                }
            }

        }

        if(nota != null && nota.getItem() != null && !nota.getItem().isEmpty() && nota.getNumero() != null && nota.getData() !=null && nota.getValorTotal() !=null && nota.getCliente() !=null) {

            nota = repository.save(nota);
        }
        return nota;
    }
}
