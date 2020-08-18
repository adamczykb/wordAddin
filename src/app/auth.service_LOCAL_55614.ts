
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './login/login'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //Token: 'my-auth-token'
    })
};
export interface Token {
    Token: string
}

@Injectable()
export class AuthService {
    contents: object;
    constructor(private http: HttpClient) {

    }

    getExpireTime(token) {
        const url = 'http://localhost:8080/token/expire';
        const headers = new HttpHeaders().set('Token', token);
        this.http.post(url, null, { responseType: 'text', headers }).toPromise().then(
            function (data) { 
                localStorage.setItem("Expire", data);
        }
        ).catch((error: any) => {
            if (error.status != 200) {
                return Observable.throw(new Error(error.status));
            }
        });
    }


    loginIn(login: Login) {
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        this.http.post('http://localhost:8080/login', { login: login.login, password: login.password }, { responseType: 'text' }).toPromise().then(
            function (data) { 
                if(JSON.parse(data)["Token"]!=""){
                    localStorage.setItem("Token", (JSON.parse(data)["Token"]));
                    localStorage.setItem("Expire", (JSON.parse(data)["Expire"]));
                }else{
                    document.getElementById("test").innerText="Wrong credentials";
                }
        })
        
    }
}