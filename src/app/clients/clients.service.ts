import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from './client';
import { CLIENTS } from './mock-clients';


@Injectable({
    providedIn: 'root',
})
export class ClientService {

    getClients(): Observable<Client[]> {
        return of(CLIENTS);
    }


    getClient(id: number | string) {
        return this.getClients().pipe(
            map((clients: Client[]) => clients.find(client => client.id === +id))
        )
    }
}