import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issue } from './issue';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class IssueService {

    constructor(
        private http: HttpClient
    ) {}

    getIssues(): Observable<Issue[]> {
        return this.http.get<Issue[]>('http://localhost:8080/issue/list');
    }

    getIssue(id: number | string) {
        return this.getIssues().pipe(
            map((issues: Issue[]) => issues.find(issue => issue.id === +id))
        )
    }
}