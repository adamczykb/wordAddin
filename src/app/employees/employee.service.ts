import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

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

    getEmployee(id: number | string) {
        return this.getEmployees().pipe(
            map((employees: Employee[]) => employees.find(employee => employee.id === +id))
        )
    }
}