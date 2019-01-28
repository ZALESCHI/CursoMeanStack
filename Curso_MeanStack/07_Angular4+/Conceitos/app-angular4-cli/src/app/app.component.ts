import { Component } from '@angular/core';
import { ExemploComponent } from './exemplo/exemplo.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Conceitos do Angular 4+ (7)</h1>
    <h3>Projeto: {{title}}</h3> 
    <primeiro-exemplo></primeiro-exemplo> 
    <cursos-lista></cursos-lista>
  `
})
export class AppComponent {
  title = 'app-angular4-cli';
}
