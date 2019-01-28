import { Injectable } from "@angular/core";
import { IEvento } from '../interfaces/interface.evento';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { IEventoId } from "../interfaces/interface.eventoid";

@Injectable()
export class EventosService {


    public constructor(private _http: Http) { }

    private url: string = "http://localhost:3200/eventos";

    //funções para eventos
    public getEventosWS(): Observable<IEvento[]> {
        return this._http.get(this.url)
            .map(res => res.json());
    }

    public setEventoWS(evento: IEvento): Observable<IEvento> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        let json = JSON.stringify(
            {
                descricao: evento.descricao,
                data: evento.data,
                preco: evento.preco
            });

        return this._http.post(this.url, json, options)
            .map(res => res.json());
    }

    //funções para convidados
    public getEventosIdWS(): Observable<IEventoId[]> {
        return this._http.get(this.url)
            .map(res => res.json());
    }
    

    public getEventos(): IEvento[] {
        return [
            { descricao: 'Avaliação Angular', data: '23/10/2018', preco: 0 },
            { descricao: 'Formatura', data: '02/05/2020', preco: 140 },
            { descricao: 'Torneio de Tenis', data: '10/07/2018', preco: 210 },
            { descricao: 'Congresso de TI', data: '16/01/2019', preco: 400 }
        ];
    }
}