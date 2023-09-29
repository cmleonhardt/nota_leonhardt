import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cliente} from "../../model/cliente";
import {Nota} from "../../model/nota";

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private readonly api = '/nota/notas';

  constructor(private http: HttpClient) {

  }

  notaList(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.api)
      .pipe(
        map ( origen => {
          let vetor: Nota[] = [];
          for ( let o of origen){
            vetor.push(new Nota(o));
          }
          console.log(vetor)
          return vetor;
        })
      );
  }

}
