import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { EmployeeListComponent } from './employees/employee-list.component/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail.component/employee-detail.component';

const routes: Routes = [];

const clientsRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:id', component: ClientDetailComponent }
];

const employeesRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(clientsRoutes),
    RouterModule.forChild(employeesRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
