package com.example.demo.controller;

import com.example.demo.model.Cliente;
import com.example.demo.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping( "/cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository rep;


    @GetMapping("/nome")
    public String getNome() {
        return " Eliseu";
    }


    @GetMapping("/{id}")
    public Cliente getCliente(@PathVariable Optional<Cliente> id) {
        Cliente cli = new Cliente();
        Optional<Cliente> op = Optional.ofNullable(rep.findById(id));
        if (op.isPresent()) {
            return op.get();
        }

        return cli;
    }

    @GetMapping("/clientes")
    public List<Cliente> getClientes() {
        List<Cliente> c = rep.findAll();

        return c;
    };

    @PostMapping("/new")
    public Cliente postClientes(@RequestBody Cliente cliente) {
        rep.save(cliente);
        return cliente;
    }

    @DeleteMapping("/{id}")
    public void deleteClientes(@PathVariable Integer id) {

        rep.deleteById(id);
    };

    @PutMapping("/")
    public Cliente updateClientes(@RequestBody Cliente cliente){
        rep.save(cliente);
        return cliente;
    };

}
