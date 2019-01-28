import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})
export class MenuComponent {
    titulo_empresa: string = "Impacta Treinamentos";
    titulo_home: string = "Home";
    titulo_eventos: string = "Gestão de Eventos";
    titulo_convidados: string = "Inclusão de Convidados";
    titulo_lista: string = "Lista de Convidados"
}