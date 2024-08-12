export class Disciplina {
  private _id: number;
  private _nome: string;
  private _cargaHoraria: number;
  private _professor: string;
  
  private static _proximoID: number = 1;

  constructor(nome: string, cargaHoraria: number, professor: string) {
    this._id = Disciplina._proximoID++;
    this._nome = nome;
    this._cargaHoraria = cargaHoraria;
    this._professor = professor;
  }

  get id(): number {
    return this._id;
  }

  get professor(): string {
    return this._professor;
  }
  
  set professor(professor: string) {
    this._professor = professor;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get cargaHoraria(): number {
    return this._cargaHoraria;
  }

  set cargaHoraria(cargaHoraria: number) {
    this._cargaHoraria = cargaHoraria;
  }
}
