import {Component, EventEmitter, Input, NgModule, OnInit, Output} from "@angular/core";
import {Estado} from "../../../model/estado";
import {Municipio} from "../../../model/municipio";
import {CidadeEstadoService} from "../../services/cidade-estado.service";
import {CommonModule} from "@angular/common";
import {DxSelectBoxModule, DxTemplateModule, DxTextBoxModule} from "devextreme-angular";
import ArrayStore from 'devextreme/data/array_store';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "../../../app.module";
import {BrowserModule} from "@angular/platform-browser";
import {of} from "rxjs";

@Component({
  selector: 'select-box-cidade-estado',
  templateUrl: './select-box-cidade-estado.component.html',
  styleUrls: ['./select-box-cidade-estado.component.scss'],
  providers: [CidadeEstadoService],
})

export class SelectBoxCidadeEstadoComponent implements OnInit{



  public estadoArray: Estado[];
  public municipioArray: Municipio[];
  public data: any;


  dropDownOptions = { height:150 }

  @Input()
  widthEstado: string = "200px"

  @Input()
  widthMunicipio: string = "200px"

  @Input()
  estadoPadrao: Estado;

  @Output()
  municipioSelecionado: EventEmitter<string> = new EventEmitter<string>();
  // municipioSelecionado: string;


  @Output()
  estadoSelecionado: EventEmitter<string> = new EventEmitter<string>();
  // estadoSelecionado: string;

  constructor(
    private mainService: CidadeEstadoService) {
  }

  ngOnInit(): void{
    console.log(1)
    this.mainService.estadolist().subscribe(res => {
      // console.log(2)
      this.estadoArray = res;
      // console.log(3)
      this.estadoPadrao = this.setaEstadoPadrao(this.estadoArray, this.estadoPadrao);
    });
    // console.log(4)

  }


  getMainService(): any { return this.mainService; }

  onValueChangedEstado(estado: Estado){
    this.estadoSelecionado.emit(estado.nome);

    this.getMainService().municipioslist(estado.id).subscribe(mun => { this.municipioArray = mun;});

    // console.log(e.id);
    // console.log(e.nome);
    // console.log((e.value))
  }

  onValueChangedMunicipio(cidade: Municipio){
    this.municipioSelecionado.emit(cidade.nome);
  }

  setaEstadoPadrao(lista, estadoPadrao): Estado{
    if (this.estadoArray && estadoPadrao){
      for ( let e of lista){
        if (e.sigla == estadoPadrao.sigla){
          return e;
        }
      }
    }
    return null;
  }

  mostraConsole(msg: string) {
    console.log(msg);
  }

}

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    BrowserModule,
    DxTextBoxModule,
    DxTemplateModule
  ],
  declarations: [ SelectBoxCidadeEstadoComponent ],
  exports: [ SelectBoxCidadeEstadoComponent ]
})
export class SelectBoxCidadeEstadoModule { }

