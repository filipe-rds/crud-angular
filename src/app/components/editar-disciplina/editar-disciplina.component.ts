import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DisciplinaService } from "../../shared/services/disciplina.service";

@Component({
  selector: 'app-editar-disciplina',
  templateUrl: './editar-disciplina.component.html',
  styleUrl: './editar-disciplina.component.scss'
})
export class EditarDisciplinaComponent {

  constructor(private rotaAtual: ActivatedRoute, controlador: DisciplinaService) { }
}
