import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes } from './rotas/app.routes'; //deve vir primeiro

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu/menu.component';

//usado nas rotas
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { EventosService } from './services/eventos.service';
import { SubLista } from './filters/sublista.filter';
import { CadConvidadoComponent } from './cadastro/cadconvidado.component';
import { ConvidadosService } from './services/convidados.service';
import { ListaConvidadosComponent } from './listaconvidados/lista.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    HttpModule ],
  
  declarations: [ 
    AppComponent, 
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent,
    SubLista,
    CadConvidadoComponent,
    ListaConvidadosComponent ],

  providers: [ EventosService, ConvidadosService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
