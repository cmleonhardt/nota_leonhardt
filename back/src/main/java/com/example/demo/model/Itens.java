package com.example.demo.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Itens {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // sequenciador

    private Integer numeroDoItem;

    private BigDecimal quantidade;

    private BigDecimal valorTotalDoItem;

    @ManyToOne
    private Produto produto;

    @ManyToOne
    private Nota nota;




    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumeroDoItem() {
        return numeroDoItem;
    }

    public void setNumeroDoItem(Integer numeroDoItem) {
        this.numeroDoItem = numeroDoItem;
    }

    public BigDecimal getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(BigDecimal quantidade) {
        this.quantidade = quantidade;
    }

    public BigDecimal getValorTotalDoItem() {
        return valorTotalDoItem;
    }

    public void setValorTotalDoItem(BigDecimal valorTotalDoItem) {
        this.valorTotalDoItem = valorTotalDoItem;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Nota getNota() {
        return nota;
    }

    public void setNota(Nota nota) {
        this.nota = nota;
    }

}
