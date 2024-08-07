import { Injectable } from '@angular/core';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private _disciplinas: Disciplina[] = []

  constructor() { }

  get disciplinas(): Disciplina[] {
    return this._disciplinas;
  }

  buscarIndexDisciplina(nome: string): number {
    return this._disciplinas.findIndex(d => d.nome === nome);
  }

  adicionarDisciplina(disciplina: Disciplina): void {
    this._disciplinas.push(disciplina);
  }

  removerDisciplina(disciplina: Disciplina): void {
    this._disciplinas = this._disciplinas.filter(d => d !== disciplina);
  }

  atualizarDisciplina(nome: string, novaCargaHoraria?: number, novoProfessor?: string): void {
    const id = this.buscarIndexDisciplina(nome);
    const disciplina = this._disciplinas.find(d => d.id === id);
    if (disciplina) {
      if (novaCargaHoraria) {
        disciplina.cargaHoraria = novaCargaHoraria;
      }
      if (novoProfessor) {
        disciplina.professor = novoProfessor;
      }
    }
  }
}
