export class Produto {

  id: number;
  codigo: string;
  descricao: string;
  valorUnitario: string;

  constructor(obj: any) {
    if (obj) {
      this.id = obj.id;
      this.codigo = obj.codigo;
      this.descricao = obj.descricao;
      this.valorUnitario = obj.valorUnitario;
    }
  }
}
