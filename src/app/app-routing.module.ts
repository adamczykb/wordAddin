import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';

const routes: Routes = [];

const clientsRoutes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'client/:id', component: ClientDetailComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(clientsRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
