import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from './client';
import { CLIENTS } from './mock-clients';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientService {

    constructor(
        private http: HttpClient
    ) {}

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>('http://localhost:8080/client/list');
    }

    getClient(id: number | string) {
        return this.getClients().pipe(
            map((clients: Client[]) => clients.find(client => client.id === +id))
        )
    }
}