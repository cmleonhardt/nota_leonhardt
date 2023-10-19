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
          this.clienteService.insert(change.data).subscribe();
        }
      }
    }

    if(event.changes){
      for (let change of event.changes) {
        if(change.type == 'update'){
          this.clienteService.update(change.data).subscribe();
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
