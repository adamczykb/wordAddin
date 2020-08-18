import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { IssueListComponent } from './issues/issue-list/issue-list.component';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail.component';

const routes: Routes = [];

const clientsRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:id', component: ClientDetailComponent }
];

const employeesRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent }
]

const issueRoutes: Routes = [
  { path: 'issues', component: IssueListComponent},
  { path: 'issue/:id', component: IssueDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(clientsRoutes),
    RouterModule.forChild(employeesRoutes),
    RouterModule.forChild(issueRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
