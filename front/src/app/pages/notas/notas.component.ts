import {Component, OnInit} from '@angular/core';
import {NotaService} from "../../shared/services/nota.service";
import {Nota} from "../../model/nota";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  dataSource: Nota[];

  notas: Nota[];

  constructor( private notaService: NotaService) {
  }

  ngOnInit() {
    this.notaService.notaList().subscribe( res => this.dataSource = res );
    console.log(this.notas)
  }

}
