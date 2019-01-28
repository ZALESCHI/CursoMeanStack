import { Component } from "@angular/core";
import { EventosService } from "../services/eventos.service";
import { ConvidadosService } from "../services/convidados.service";
import { IEventoId } from "../interfaces/interface.eventoid";
import { IConvidado } from "../interfaces/interface.convidado";

@Component({
    moduleId: module.id,
    templateUrl: 'views/lista.component.html'
})
export class ListaConvidadosComponent {

    //definindo um array de eventos
    public listaEventos: IEventoId[];

    //definindo um array de convidados
    public listaConvidados: IConvidado[];

    public idvento: string = '';

    constructor(private eventosService: EventosService, private convidadosService: ConvidadosService) {
        this.listar();
    }
   
    public listar(): void {
        this.eventosService.getEventosIdWS()
            .subscribe(                
                res => this.listaEventos = res,
                error => alert(error),
                () => console.log('finalizado'));
    }
    
    public listarConvidados(id: string): void {
        this.convidadosService.getConvidadosWS(id)
            .subscribe(
                res => this.listaConvidados = res,
                error => alert(error),
                () => console.log('finalizado'));
    }
}