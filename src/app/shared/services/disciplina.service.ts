import { Injectable } from '@angular/core';
import { Disciplina } from '../models/disciplina';
import { Cadastros } from "../models/cadastros";

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private _disciplinas: Disciplina[] = Cadastros;

  constructor() { }

  get disciplinas(): Disciplina[] {
    return this._disciplinas;
  }

  buscarIndexDisciplina(nome: string): number {
    return this._disciplinas.findIndex(d => d.nome === nome);
  }

  retornarDisciplinaPorIndex(index: number): Disciplina {
    return this._disciplinas[index];
  }

  adicionarDisciplina(disciplina: Disciplina): void {
    this._disciplinas.push(disciplina);
  }

  removerDisciplina(disciplina: Disciplina): void {
    this._disciplinas = this._disciplinas.filter(d => d !== disciplina);
  }

  atualizarDisciplina(id: number, novoNome?: string, novaCargaHoraria?: number, novoProfessor?: string): void {
    const disciplina = this._disciplinas.find(d => d.id === id);
    if (disciplina) {
      if (novoNome) {
        disciplina.nome = novoNome;
      }
      if (novaCargaHoraria) {
        disciplina.cargaHoraria = novaCargaHoraria;
      }
      if (novoProfessor) {
        disciplina.professor = novoProfessor;
      }
    }
  }
}
