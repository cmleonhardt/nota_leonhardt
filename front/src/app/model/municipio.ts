export class Municipio {
  id: number;
  nome: string;

  constructor(obj: any) {
    if(obj){
      this.id = obj.id;
      this.nome = obj.nome;
    }
  }
}
