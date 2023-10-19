import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cliente} from "../../model/cliente";
import {Nota} from "../../model/nota";

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private readonly api = '/api/nota';

  constructor(private http: HttpClient) {
  }

  notaList(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.api + '/notas')
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

  insert(nota: Nota): Observable<Nota> {
    if(nota.id){
      nota.id = null;
      if(nota.item && nota.item.length > 0){
        for (let item of nota.item) {
          item.id = null;
        }
      }
    }
    return this.http.post<Nota>(this.api + '/new', nota);
  }

  update(nota: Nota): Observable<Nota>{
    if(nota.item && nota.item.length > 0){
      for (let item of nota.item) {
        if (!Number.isInteger(item.id)) {
          item.id = null;
        }
      }
    }
    return this.http.put<Nota>(this.api + '/', nota);
  }

  delete(id: number): Observable<any>{
    return  this.http.delete<any>(this.api + '/' + id)
  }
}
