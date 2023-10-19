import {Produto} from "./produto";
import {Nota} from "./nota";

export class Item {

  id: number;

  numeroDoItem: number;

  quantidade: number;

  valorDoItem: number;

  produto: Produto;

  nota: Nota;

  constructor(obj: any) {
    if (obj) {
      this.id = obj.id;
      this.numeroDoItem = obj.numeroDoItem;
      this.quantidade = obj.quantidade;
      this.valorDoItem = obj.valorDoItem;
      this.produto = obj.produto;
      this.nota = obj.nota;
    }
  }

}
