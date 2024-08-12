import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerenciador-disciplinas';
  constructor(private roteador: Router) { }
  ngOnInit(): void {
    // Navegar para a rota 'listar-disciplina' ao carregar o componente pela primeira vez
    this.roteador.navigate(['/listar-disciplina']);
  }

}

