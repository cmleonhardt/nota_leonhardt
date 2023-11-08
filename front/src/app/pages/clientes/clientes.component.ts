import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../model/cliente";
import {ClienteService} from "../../shared/services/cliente.service";
import {Observable} from "rxjs";
import DevExpress from "devextreme";
import data = DevExpress.data;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  providers: [ClienteService],
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [];

  showNotificacaoCliente: boolean = false;

  typeCliente = 'info';
  messageCliente: string;


  constructor( private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.clienteService.clienteList().subscribe( res => {
      this.clientes = res
    } );
  }

  getClienteService(): any { return this.clienteService;}


  onSavedCliente(event: any) {
    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'insert'){
          this.clienteService.insert(change.data).subscribe(c =>{
            this.typeCliente = 'success'
            this.messageCliente = 'Cliente salvo com sucesso'
            this.showNotificacaoCliente = true;
              setTimeout(() => this.showNotificacaoCliente=false, 3000);
            },
              e => {
                // console.log(e)
                this.typeCliente = 'error';
                this.messageCliente = 'Erro ao gravar cliente, por favor verificar campo vazio';
                this.showNotificacaoCliente = true
                setTimeout(() => this.showNotificacaoCliente=false, 3000);
          });
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'update'){
          this.clienteService.update(change.data).subscribe(c =>{
              this.typeCliente = 'success'
              this.messageCliente = 'Cliente atualizado com sucesso'
              this.showNotificacaoCliente = true;
              setTimeout(() => this.showNotificacaoCliente=false, 3000);
            },
            e => {
              // console.log(e)
              this.typeCliente = 'error';
              this.messageCliente = 'Erro ao atualizar cliente, por favor verificar campo vazio';
              this.showNotificacaoCliente = true
              setTimeout(() => this.showNotificacaoCliente=false, 3000);
            });
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'remove'){
          this.clienteService.delete(change.key).subscribe();
        }
      }
    }
  }
}
