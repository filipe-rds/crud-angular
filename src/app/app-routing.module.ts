import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDisciplinaComponent } from './components/cadastro-disciplina/cadastro-disciplina.component';
import { ListarDisciplinaComponent } from './components/listar-disciplina/listar-disciplina.component';


const routes: Routes = [
  {
    path: 'cadastro-disciplina',
    component: CadastroDisciplinaComponent
  },
  {
    path: 'cadastro-disciplina/:id',
    component: CadastroDisciplinaComponent
  },
  {
    path: 'listar-disciplina',
    component: ListarDisciplinaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
