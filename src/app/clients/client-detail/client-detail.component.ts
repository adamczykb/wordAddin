import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Issue } from 'src/app/issues/issue';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
    client$: Observable<Client>;
    issues$: Observable<Issue[]>;

    constructor(
        private service: ClientService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.client$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getClient(params.get('id')))
        );

        this.issues$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getIssues(params.get('id')))
        );
    }

    gotoClients(client: Client) {
        const clientId = client ? client.id : null;
        this.router.navigate(['/clients']);
    }
}