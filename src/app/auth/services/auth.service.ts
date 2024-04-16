import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string = environment.baseUrl;
private user?:User;
constructor(private _http:HttpClient) { }

  get currentUser():User|undefined{
    if(!this.user) return undefined;
    return structuredClone(this.user);
  }
  login(email:string, password:string):Observable<User>{
    return this._http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user=>{this.user=user}),
        tap( user =>localStorage.setItem('token', 'ams213dds21wsa3dd'))
      )
  }
  checkAuthStatus():Observable<boolean>{
    if(!localStorage.getItem('token')) return of (false)
      const token = localStorage.getItem('token')
    return this._http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user =user),
      map(user => !!user),
      catchError(err => of(false))
    )
  }
  logOut(){
      this.user = undefined
      localStorage.clear();
  }
}
