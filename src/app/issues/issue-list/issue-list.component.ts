import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Issue } from "../issue";
import { IssueService } from "../issue.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-issue-list',
    templateUrl: './issue-list.component.html',
    styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
    issues$: Observable<Issue[]>;

    constructor(
        private service: IssueService,
        private route: ActivatedRoute
    ) {}
    
    ngOnInit() {
        this.issues$ = this.service.getIssues();
    }
}