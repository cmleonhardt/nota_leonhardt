package com.example.demo.controller;

import com.example.demo.model.Itens;
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
        if ( nota != null && nota.getItens() != null && !nota.getItens().isEmpty()){
            for (Itens iten : nota.getItens()) {
               if ( iten.getNota() == null){
                   iten.setNota(nota);
               }
            }

        }
        repository.save(nota);
        return nota;
    }

    @DeleteMapping("/{id}")
    public void deleteNota(@PathVariable Integer id) {
        repository.deleteById(id);
    }

    @PutMapping("/")
    public Nota updateNota(@RequestBody Nota nota){
        repository.save(nota);
        return nota;
    }
}
