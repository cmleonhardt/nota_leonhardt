package com.example.demo.controller;

import com.example.demo.model.Cliente;
import com.example.demo.repository.ClienteRepository;
import org.hibernate.service.spi.ServiceException;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.List;
import java.util.Optional;
import javax.swing.JOptionPane;

@RestController
@RequestMapping( "/cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository repository
            ;

//    public static void main(String[] args){
//        JOptionPane.showMessageDialog(null,"Teste! \n, Mensagem");
//    }


    @GetMapping("/nome")
    public String getNome() {
        return " Eliseu";
    }


    @GetMapping("/{id}")
    public Cliente getCliente(@PathVariable Optional<Cliente> id) {
        Cliente cli = new Cliente();
        Optional<Cliente> op = Optional.ofNullable(repository.findById(id));
        if (op.isPresent()) {
            return op.get();
        }

        return cli;
    }

    @GetMapping("/clientes")
    public List<Cliente> getClientes() {
        List<Cliente> c = repository.findAll();

        return c;
    };

    @PostMapping("/new")
    public Cliente postClientes(@RequestBody Cliente cliente) throws Exception {

        if(cliente.getCodigo()==null){
            throw new Exception("Código nulo, por favor inserir um código");
        }
        if(cliente.getNome()==null){
            throw new Exception("Nome do cliente nulo, por favor inserir um nome");
        }
        repository.save(cliente);
        return cliente;
    }

    @DeleteMapping("/{id}")
    public void deleteClientes(@PathVariable Integer id) {

        repository.deleteById(id);
    }

    @PutMapping("/")
    public Cliente updateClientes(@RequestBody Cliente cliente) throws Exception{

        if(cliente.getCodigo()==null){
            throw new Exception("Código nulo, por favor inserir um código");
        }
        if(cliente.getNome()==null){
            throw new Exception("Nome do cliente nulo, por favor inserir um nome");
        }

        repository.save(cliente);
        return cliente;
    }

}
