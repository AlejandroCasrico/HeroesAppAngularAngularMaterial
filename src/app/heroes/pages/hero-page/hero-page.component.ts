import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroe';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit{

  constructor(private HeroesService:HeroesService,
    private activatedRoute: ActivatedRoute, private router:Router){}
    public hero?:Hero;
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(2000),
        switchMap(({id})=>this.HeroesService.getHeroById(id))
      ).subscribe(hero=>{
        if(!hero) return this.router.navigate(['/heroes/list'])
          this.hero = hero
        console.log(hero);
        return
        });
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }
}
