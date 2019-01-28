import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
    selector: 'cursos-lista',

   templateUrl: 'views/cursos.component.html'
})
export class CursosComponent{
    cursos: string[];

    constructor(cursosSvc: CursosService){
        this.cursos = cursosSvc.getCursos();
    }
}