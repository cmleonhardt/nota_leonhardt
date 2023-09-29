import {Component} from '@angular/core';
import {Estado} from "../../model/estado";


@Component({
  templateUrl: 'teste-page.component.html',
  styleUrls: [ './teste-page.component.scss' ]
})

export class TestePageComponent {

  recebeMunicipio: string;
  recebeEstado: string;


  meuestado = new Estado({ id: 31, sigla: 'MG', nome: 'Minas Gerais'});

  constructor() {  }

  getEstado(e){
    this.recebeEstado = e;
  }

  getMunicipio(e){
    this.recebeMunicipio = e;
  }
}
