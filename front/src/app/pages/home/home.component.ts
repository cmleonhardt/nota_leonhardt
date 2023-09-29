import {Component} from '@angular/core';
import { AppModule} from "../../app.module";

import {SelectBoxCidadeEstadoComponent} from "../../shared/components/select-box-cidade-estado/select-box-cidade-estado.component";


@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {

  /** Teste com o selectbox*/
  // dados : Item[];
  // dropDownOptions = { height:150 }

  /** Segunaa fase de teste que funcionou , transferimos para o componente*/
  // public estadoArray: Estado[];
  // public municipioArray: Municipio[];



  constructor(
    // private mainService: CidadeEstadoService
  ) {
    // this.dados = mainService.getItens();
    // this.dataSource = new DataSource({
    //   store: {
    //     data: this.dados,
    //     type: 'array',
    //     key: 'ID'
    //   },
    //   group: "Categoria"
    // });
    // this.mainService.list().subscribe( console.log())

  //   mainService.estadolist().subscribe(res => { this.estadoArray = res;});
  //   // mainService.municipioslist().subscribe(mun => { this.municipioArray = mun;});
  //   }
  // getMainService(): any { return this.mainService; }
  //
  //
  // onValueChanged(e){
  //   this.getMainService().municipioslist(e.value.id).subscribe(mun => { this.municipioArray = mun;});
  //
  //   console.log(e.value.id);
  //   // console.log((e.value))

  }
}
