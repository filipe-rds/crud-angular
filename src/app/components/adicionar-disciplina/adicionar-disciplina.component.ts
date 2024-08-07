import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DisciplinaService } from "../../shared/services/disciplina.service";

@Component({
  selector: 'app-adicionar-disciplina',
  templateUrl: './adicionar-disciplina.component.html',
  styleUrl: './adicionar-disciplina.component.scss'
})
export class AdicionarDisciplinaComponent {

  constructor(private rotaAtual: ActivatedRoute) { }

}
