import {Component, OnInit} from '@angular/core';
import {NotaService} from "../../shared/services/nota.service";
import {Nota} from "../../model/nota";
import {Cliente} from "../../model/cliente";
import {ClienteService} from "../../shared/services/cliente.service";
import {Produto} from "../../model/produto";
import {ProdutoService} from "../../shared/services/produto.service";
import {DxDataGridComponent} from "devextreme-angular";


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  notas: Nota[] = [];

  clientes: Cliente[];

  produtos: Produto[];


  cliente: Cliente;
  produto: Produto;
  nota: Nota;

  constructor( private notaService: NotaService,
               private clienteService: ClienteService,
               private produtoService: ProdutoService ) {

    // this.onInitNewRowNotas = this.onInitNewRowNotas.bind(this);
  }

  ngOnInit() {
    this.notaService.notaList().subscribe( res => {
      this.notas = res;
    } );
    console.log(this.notas)

    this.clienteService.clienteList().subscribe(res => this.clientes = res);

    this.produtoService.produtoList().subscribe(res => {
      this.produtos = res;
    });

  }

  getCliente(cliente: Cliente){
    if(cliente && this.clientes && this.clientes.length > 0){
      for (let c of this.clientes) {
        if (cliente.id == c.id){
          return c;
        }
      }
    }
    return null;
  }

  getProdutos(produto: Produto){
    if(produto && this.produtos && this.produtos.length > 0){
      for (let p of this.produtos) {
        if(produto.id == p.id){
          return p
        }
      }
    }
    return null;
  }

  onInitNewRowNotas(event: any){
    console.log( "chegou")
    if(!event.data.item){
      event.data.item = [];
     }
    if(!event.data.data){
      event.data.data = new Date();
    }
  }

  onValueChangedCliente(event: any, data: any) {
    if(event.value){
      data.setValue(event.value);
    }
  }

  onValueChangedProduto(event: any, data: any){
    if(event.value) {
      data.setValue(event.value);
      console.log( "Deu certo até aqui")
      if(data.data && data.data.quantidade){
        data.data.valorDoItem = data.data.quantidade * data.data.produto.valorUnitario;

        if(this.notas){
          for (let n of this.notas) {
            if(n.id == data.data.nota){
              n.valorTotal = 0
              for (let item of n.item) {
                n.valorTotal = n.valorTotal + item.valorDoItem;

              }

            }
          }
        }
      }
    }
  }


  showLog(event: any, log: string){
    console.log(log);
  }

  onSavedNota(event: any) {
    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'insert'){
          this.notaService.insert(change.data).subscribe();
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'update'){
          this.notaService.update(change.data).subscribe();
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'remove'){
          this.notaService.delete(change.key).subscribe();
        }
      }
    }

  }


  // onSavedItem(event: any) {
  //   if(event.changes){
  //     for (let change of event.changes) {
  //       if(change.type == 'update'){
  //         this.notaService.update(change.data).subscribe();
  //       }
  //     }
  //   }
  // }
  // onRowUpdate(event: any, data: any) {
  //   if(event.data) {
  //     data.setValue(event.data);
  //     console.log( "Deu certo até aqui no item")
  //   }
  // }
}
