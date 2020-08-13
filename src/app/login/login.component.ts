import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from './login'
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Logowanie';
  model = new Login('','');
  token: string;
  constructor(private service: AuthService,private http: HttpClient) {

  }
  ngOnInit() {
    //this.service JSON.stringify(this.model.login)+" "+JSON.stringify(this.model.password
    
  }
  onSubmit(){
    console.log(this.service.loginIn(this.model));
  }

}
