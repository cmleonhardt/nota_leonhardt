import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../model/estado";
import {map, Observable} from "rxjs";
import {Municipio} from "../../model/municipio";

@Injectable()
export class CidadeEstadoService {

  private readonly api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) {
  }

  estadolist(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.api)
      .pipe(
        map ( origen => {
          let vetor: Estado[] = [];
          for ( let o of origen){
            vetor.push(new Estado(o));
          }
          console.log(vetor)
          return vetor;
        })
      );
  }

  municipioslist(e): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(`${this.api}/${e}/municipios`)
      .pipe(
        map ( origen1 => {
          let vetor1: Municipio[] = [];
          for ( let o of origen1){
            vetor1.push(new Municipio(o));
          }
          console.log(vetor1)
          return vetor1;
        })
      );
  }
}

