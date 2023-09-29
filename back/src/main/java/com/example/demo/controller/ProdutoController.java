package com.example.demo.controller;

import com.example.demo.model.Cliente;
import com.example.demo.model.Produto;
import com.example.demo.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @GetMapping("/{id}")
    public Produto getCliente(@PathVariable Optional<Produto> id) {
        Produto prod = new Produto();
        Optional<Produto> produto = Optional.ofNullable(repository.findById(id));
        if (produto.isPresent()) {
            return produto.get();
        }

        return prod;
    }

    @GetMapping("/produtos")
    public List<Produto> getProdutos() {
        List<Produto> prod = repository.findAll();
        return prod;
    }

    @PostMapping("/new")
    public Produto postProduto(@RequestBody Produto produto){
        repository.save(produto);
        return produto;
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable Integer id){
        repository.deleteById(id);
    }

    @PutMapping("/")
    public Produto updateProduto(@RequestBody Produto produto){
        repository.save(produto);
        return produto;
    }
}
