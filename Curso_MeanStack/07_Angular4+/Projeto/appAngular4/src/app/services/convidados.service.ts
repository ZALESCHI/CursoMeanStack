import { Injectable } from "@angular/core";
import { IConvidado } from '../interfaces/interface.convidado';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class ConvidadosService {

    public constructor(private _http: Http) { }

    private url: string = "http://localhost:3200/convidados";

    //funções para eventos
    public getConvidadosWS(id: string): Observable<IConvidado[]> {
        return this._http.get(this.url + '/' + id)
            .map(res => res.json());
    }

    public setConvidadoWS(convidado: IConvidado): Observable<IConvidado> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        let json = JSON.stringify(
            {
                idevento: convidado.idevento,
                cpf: convidado.cpf,
                nome: convidado.nome,
                email: convidado.email
            });

        return this._http.post(this.url, json, options)
            .map(res => res.json());
    }
}