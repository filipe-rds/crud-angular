import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdicionarDisciplinaComponent } from './components/adicionar-disciplina/adicionar-disciplina.component';
import { ListarDisciplinaComponent } from './components/listar-disciplina/listar-disciplina.component';
import { EditarDisciplinaComponent } from './components/editar-disciplina/editar-disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarDisciplinaComponent,
    ListarDisciplinaComponent,
    EditarDisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
