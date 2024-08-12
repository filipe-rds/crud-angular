import { Component } from '@angular/core';
import { DisciplinaService } from "./shared/services/disciplina.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerenciador-disciplinas';
  constructor() {}

}

