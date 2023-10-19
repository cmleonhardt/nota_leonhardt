import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cliente} from "../../model/cliente";
import {Produto} from "../../model/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly api = '/api/produto';

  constructor(private http: HttpClient) {

  }

  produtoList(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.api + '/produtos')
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

  insert(produto: Produto): Observable<Produto>{
    if(produto.id){
      produto.id = null;
    }
    return this.http.post<Produto>( this.api + '/new', produto);
  }

  update(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>( this.api + '/', produto);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>( this.api + '/' + id);
  }
}
