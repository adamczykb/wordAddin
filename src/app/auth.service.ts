
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login/login'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //Token: 'my-auth-token'
    })
};
@Injectable()
export class AuthService {
    contents: object;
    constructor(private http: HttpClient) {

    }
    loginIn(login: Login){
        return this.http.post('http://localhost:8080/login', login, httpOptions).subscribe(results => this.contents = results);
    }

}