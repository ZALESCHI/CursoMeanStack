import { Component } from "@angular/core";
import { IEventoId } from "../interfaces/interface.eventoid";
import { EventosService } from "../services/eventos.service";
import { ConvidadosService } from "../services/convidados.service";
import { IConvidado } from "../interfaces/interface.convidado";

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadconvidado.component.html'
})
export class CadConvidadoComponent {
    //definindo um array de eventos
    public listaEventos: IEventoId[];

    //para um convidado selecionado
    public convidadoSelecionado: IConvidado;

    constructor(private eventosService: EventosService, private convidadosService: ConvidadosService) {
        this.listar();
        this.limpar();
    }

    private limpar(){
        this.convidadoSelecionado =  {
            idevento: '',
            cpf: '',
            nome: '',
            email: ''
        };
    }

    public listar(): void {
        this.eventosService.getEventosIdWS()
            .subscribe(                
                res => this.listaEventos = res,
                error => alert(error),
                () => console.log('finalizado'));
    } 
    
    public incluir(convidado: IConvidado) {
        //this.listaEventos.push(evento);
        this.convidadosService.setConvidadoWS(convidado)
            .subscribe(
                
                res => 
                {
                    JSON.stringify(res);
                    alert('Convidado incluído com sucesso');
                }
                , 
                error => alert(error),
                () => this.limpar());

        
    }    
}