import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Cliente} from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly api = '/cliente/clientes';
  // private readonly api = 'http:localhost:8080/cliente/clientes';

  cliente: Cliente[];

  constructor(private http: HttpClient ) {

  }

  // clienteList(): Observable<Cliente[]>{
  //   return this.http.get<Cliente[]>(this.api)
  //     .pipe(
  //       tap( console.log)
  //     )
  // }

  clienteList(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.api)
      .pipe(
        map ( origen => {
          let vetor: Cliente[] = [];
          for ( let o of origen){
            vetor.push(new Cliente(o));
          }
          console.log(vetor)
          return vetor;
        })
      );
  }
}
