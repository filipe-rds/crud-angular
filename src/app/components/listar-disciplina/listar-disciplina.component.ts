import { Component } from '@angular/core';
import { DisciplinaService } from "../../shared/services/disciplina.service";

@Component({
  selector: 'app-listar-disciplina',
  templateUrl: './listar-disciplina.component.html',
  styleUrl: './listar-disciplina.component.scss'
})
export class ListarDisciplinaComponent {

  constructor(controlador: DisciplinaService) { }

}
