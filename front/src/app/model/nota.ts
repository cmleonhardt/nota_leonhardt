import {Cliente} from "./cliente";
import {Item} from "./item";

export class Nota {

  id: number;

  numero: number;

  data: Date;

  valorTotal: number;

  cliente: Cliente;

  item: Item[];

  constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.numero = obj.numero;
      this.data = obj.data;
      this.cliente = obj.cliente;
      this.item = obj.item;
      this.valorTotal = obj.valorTotal;
    }
  }
}

