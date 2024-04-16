import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public heroes:Hero[] = [];
  constructor(private heroeService:HeroesService){

  }
  ngOnInit(): void {
      this.getAllHeroes()
  }
  getAllHeroes():void{
    this.heroeService.getHeroes()
      .subscribe(heroes =>this.heroes =heroes)
  }
}
