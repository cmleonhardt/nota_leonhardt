package com.example.demo.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "itens")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // sequenciador

    private Integer numeroDoItem;

    private BigDecimal quantidade;

    @Column( name = "valor_total_do_item")
    private BigDecimal valorDoItem;

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

    public BigDecimal getValorDoItem() {
        return valorDoItem;
    }

    public void setValorDoItem(BigDecimal valorTotalDoItem) {
        this.valorDoItem = valorTotalDoItem;
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
