import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cliente} from "../../model/cliente";
import {Produto} from "../../model/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly api = '/produto/produtos';

  constructor(private http: HttpClient) {

  }

  produtoList(): Observable<Produto[]> {
    return this.http.get<Cliente[]>(this.api)
      .pipe(
        map ( origen => {
          let vetor: Produto[] = [];
          for ( let o of origen){
            vetor.push(new Produto(o));
          }
          console.log(vetor)
          return vetor;
        })
      );
  }


}
