import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../client";
import { ClientService } from "../client.service";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";


@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
    clients$: Observable<Client[]>;
    selectedId: number;

    constructor(
        private service: ClientService,
        private route: ActivatedRoute
    ) {}
    
    ngOnInit() {
        this.clients$ = this.service.getClients();
    }
}