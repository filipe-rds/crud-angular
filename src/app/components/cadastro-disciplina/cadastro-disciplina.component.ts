import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../../shared/services/disciplina.service';
import { Disciplina } from '../../shared/models/disciplina';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.component.html',
  styleUrl: './cadastro-disciplina.component.scss'
})
export class CadastroDisciplinaComponent {
  editar: boolean = false;
  disciplina: Disciplina = new Disciplina( 0, '', 0, '');

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private controlador: DisciplinaService) {
    const idDisciplina = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
    if (idDisciplina) {
      this.editar = true;
      this.disciplina = this.controlador.retornarDisciplinaPorIndex(Number(idDisciplina));
    }
  }
  opcao() {
    return this.editar? 'Editar Disciplina' : 'Adicionar Disciplina';
  }

  cadastro() {
    if (!this.editar) {
      this.controlador.adicionarDisciplina(this.disciplina);
      this.roteador.navigate(['/listar-disciplina']);
    }
    else {
      //this.controlador.atualizarDisciplina(this.disciplina.id, this.disciplina.nome,this.disciplina.cargaHoraria, this.disciplina.professor);
      this.roteador.navigate(['/listar-disciplina']);
    }
  }


}
