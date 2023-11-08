import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../shared/services/produto.service";
import {Produto} from "../../model/produto";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit{

  produtos: Produto[]= [];
  showNotificacaoProduto: boolean = false;
  typeProduto = 'info';
  messageProduto: string;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.produtoList().subscribe( res => {
      this.produtos = res
    } );
  }

  onSavedProduto(event: any) {
    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'insert'){
          this.produtoService.insert(change.data).subscribe(c =>{
            this.typeProduto = 'success';
            this.messageProduto = 'Produto salvo com sucesso';
            this.showNotificacaoProduto = true;
              setTimeout(() => this.showNotificacaoProduto=false, 3000);
          },
            e => {
            this.typeProduto = 'error';
            this.messageProduto = 'Erro ao gravar produto, por favor verificar campo vazio';
            this.showNotificacaoProduto = true;
              setTimeout(() => this.showNotificacaoProduto=false, 3000);
            });
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'update'){
          this.produtoService.update(change.data).subscribe( c => {
            this.typeProduto = 'success';
            this.messageProduto = 'Produto atualizado com sucesso';
            this.showNotificacaoProduto = true;
              setTimeout(() => this.showNotificacaoProduto=false, 3000);
          },
            e => {
            this.typeProduto = 'error';
            this.messageProduto = 'Erro ao atualizar produto, por favor verificar campo vazio';
            this.showNotificacaoProduto = true;
              setTimeout(() => this.showNotificacaoProduto=false, 3000);
            });
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'remove'){
          this.produtoService.delete(change.key).subscribe();
        }
      }
    }

  }
}
