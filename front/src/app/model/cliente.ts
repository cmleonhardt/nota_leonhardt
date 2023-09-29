
export class Cliente {

  id: number;

  codigo: string;

  nome: string;

  constructor(obj: any) {
    if (obj) {
      this.id = obj.id;
      this.codigo = obj.codigo;
      this.nome = obj.nome;
    }
  }
}
