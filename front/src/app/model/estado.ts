export class Estado {
  id: number;
  sigla: string;
  nome: string;

  constructor(obj: any) {
    if(obj){
      this.id = obj.id;
      this.sigla = obj.sigla;
      this.nome = obj.nome;
    }
  }

  getDisplayValue(){
    return this.sigla+" - "+this.nome + " - "+ this.id;
  }

}
