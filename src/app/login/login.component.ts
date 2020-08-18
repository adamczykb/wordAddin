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
  model = new Login('', '');

  constructor(private service: AuthService, private http: HttpClient) {

  }
  ngOnInit() {

  }
  onSubmit() {
    this.service.loginIn(this.model);
    /*if(localStorage.getItem("Token")!=""){
      this.service.getExpireTime(localStorage.getItem("Token"));
    }*/
    
  }

}
