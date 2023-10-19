import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable,tap} from "rxjs";
import {Cliente} from "../../model/cliente";
import DevExpress from "devextreme";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly api = '/api/cliente';
  // private readonly api = 'http:localhost:8080/cliente/clientes';

  cliente: Cliente[];

  constructor(private http: HttpClient ) {
  }

  clienteList(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.api +'/clientes')
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

  insert(cliente: Cliente): Observable<Cliente> {
    if(cliente.id){
      cliente.id = null;
    }
    return this.http.post<Cliente>(this.api + '/new', cliente);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.api + '/', cliente);
  }

  delete(id: number): Observable<any>{
      return this.http.delete<any>(this.api + '/'+ id);
  }



}
