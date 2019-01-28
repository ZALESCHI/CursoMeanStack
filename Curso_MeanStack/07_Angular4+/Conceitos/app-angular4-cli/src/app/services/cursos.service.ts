import { Injectable } from '@angular/core';

@Injectable()
export class CursosService{
    getCursos(){
        return [
            'Javascript', 
            'Massoterapia', 
            'Scrum', 
            'Spring Boot',
            'PHP',
            'Matemagica'
        ];
    }
}