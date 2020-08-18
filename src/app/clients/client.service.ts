import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../issues/issue';

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

    getIssues(id: number | string): Observable<Issue[]> {
        return this.http.get<Issue[]>('http://localhost:8080/issue/list/client/' + id)
    }

    getClient(id: number | string) {
        return this.http.get<Client>('http://localhost:8080/client/get/' + id);
    }
}