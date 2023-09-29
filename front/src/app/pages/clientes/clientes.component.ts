import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../model/cliente";
import {ClienteService} from "../../shared/services/cliente.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  providers: [ClienteService],
})
export class ClientesComponent implements OnInit{

  dataSource: Cliente[];
  clientes: Cliente[];

  constructor( private clienteService: ClienteService) {
    // this.dataSource = this.clienteService.clienteList().subscribe();
  }

  ngOnInit() {
    this.clienteService.clienteList().subscribe( res => this.dataSource = res );
    console.log(this.clientes)

  }

  getClienteService(): any { return this.clienteService;}

}
