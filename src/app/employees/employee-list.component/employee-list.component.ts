import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    employees$: Observable<Employee[]>;
    selectedId: number;

    constructor(
        private service: EmployeeService,
        private route: ActivatedRoute
    ) {}
    
    ngOnInit() {
        this.employees$ = this.service.getEmployees();
    }
}