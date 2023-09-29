import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../shared/services/produto.service";
import {Produto} from "../../model/produto";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit{

  dataSource: Produto[];

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.produtoList().subscribe( res => this.dataSource = res );
    console.log(this.produtos)

  }

}
