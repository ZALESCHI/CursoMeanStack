import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemploComponent } from './exemplo/exemplo.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './services/cursos.service';

@NgModule({
  declarations: [
    AppComponent, ExemploComponent, CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
