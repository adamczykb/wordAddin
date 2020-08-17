import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Issue } from "../issue";
import { IssueService } from "../issue.service";

@Component({
    selector: 'app-issue-detail',
    templateUrl: './issue-detail.component.html',
    styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
    issue$: Observable<Issue>;

    constructor(
        private service: IssueService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.issue$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getIssue(params.get('id')))
        );
    }

    gotoIssues(issue: Issue) {
        const issueId = issue ? issue.id : null;
        this.router.navigate(['/issues']);
    }
}