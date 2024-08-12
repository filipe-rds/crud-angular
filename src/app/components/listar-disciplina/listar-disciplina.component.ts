import { Component } from '@angular/core';
import { Disciplina } from "../../shared/models/disciplina";
import { DisciplinaService } from "../../shared/services/disciplina.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-disciplina',
  templateUrl: './listar-disciplina.component.html',
  styleUrl: './listar-disciplina.component.scss'
})
export class ListarDisciplinaComponent {
  disciplinas: Disciplina[] = [];
  
  constructor(private roteador: Router, private controlador: DisciplinaService) {
    this.disciplinas = controlador.disciplinas;
  }

  editar(disciplina: Disciplina) {
    this.roteador.navigate(['/cadastro-disciplina', disciplina.id]);
  }

  remover(disciplina: Disciplina) {
    this.controlador.removerDisciplina(disciplina);
    this.disciplinas = this.controlador.disciplinas;
  }



}
