import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap,map } from 'rxjs';
import { Hero } from '../interfaces/heroe';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl:string = environment.baseUrl;
  constructor(private _http:HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this._http.get<Hero[]>(`${this.apiUrl}/heroes`);
  }
  getHeroById(id:string):Observable<Hero|undefined>{
    return this._http.get<Hero>(`${this.apiUrl}/heroes/${id}`)
    .pipe(
      catchError(error=> of(undefined))
    )
  }
  getSuggestions(query:string):Observable<Hero[]>{
    return this._http.get<Hero[]>(`${this.apiUrl}/heroes?q=${query}&_limit=6`)
  }
  deleteHero(id:string):Observable<boolean>{
    return this._http.delete<boolean>(`${this.apiUrl}/heroes/${id}`)
    .pipe(
         map(resp => false),
      catchError(error => of(false) )
    )
  }
  createHero(hero:Hero):Observable<Hero>{
    return this._http.post<Hero>(`${this.apiUrl}/heroes`,hero)
  }
  updateHero(hero:Hero):Observable<Hero>{
    if(!hero.id) throw Error('hero id is required')
    return this._http.patch<Hero>(`${this.apiUrl}/heroes/${hero.id}`,hero)
  }
}
