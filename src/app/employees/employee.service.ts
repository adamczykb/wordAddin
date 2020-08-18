import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../issues/issue';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {

    constructor(
        private http: HttpClient
    ) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('http://localhost:8080/employee/list');
    }
    
    getIssues(id: number | string): Observable<Issue[]> {
        return this.http.get<Issue[]>('http://localhost:8080/issue/list/employee/' + id)
    }

    getEmployee(id: number | string) {
        return this.http.get<Employee>('http://localhost:8080/employee/get/' + id);
    }
}