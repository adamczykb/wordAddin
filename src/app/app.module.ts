import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { AuthService } from './auth.service';

import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './clients/client.service';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './employees/employee.service';
import { IssueListComponent } from './issues/issue-list/issue-list.component';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail.component'; 
import { IssueService } from './issues/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientListComponent,
    ClientDetailComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    IssueListComponent,
    IssueDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientService,EmployeeService,IssueService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
