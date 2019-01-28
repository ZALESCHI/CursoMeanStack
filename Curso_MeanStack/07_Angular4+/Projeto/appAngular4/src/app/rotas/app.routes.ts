import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { NotFoundComponent } from '../erro/notFound.component';
import { CadConvidadoComponent } from '../cadastro/cadconvidado.component';
import { ListaConvidadosComponent } from '../listaconvidados/lista.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "eventos", component: CadastroComponent },
    { path: "convidados", component: CadConvidadoComponent },
    { path: "listaconvidados", component: ListaConvidadosComponent },
    { path: "home", component: HomeComponent },
    { path: "**", component: NotFoundComponent }
];