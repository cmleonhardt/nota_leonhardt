import {Cliente} from "./cliente";
import {Itens} from "./itens";

export class Nota {

  id: number;

  numero: number;

  data: Date;

  cliente: Cliente;

  itens: Itens;

  constructor(obj: any) {
    if (obj) {
      this.id = obj.id;
      this.numero = obj.numero;
      this.data = obj.data;
      this.cliente = obj.cliente;
      this.itens = obj.itens;
    }
  }
}
