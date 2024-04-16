import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(private heroService:HeroesService,
    private activatedRoute:ActivatedRoute,private router:Router,
    private snackBar:MatSnackBar , private dialog:MatDialog){}
    public publishers = [
      {id:'DC Comics',desc:'DC-comics'},
      {id:'Marvel Comics',desc:'Marvel - Comics' }
    ]
ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroService.getHeroById(id)),
      ).subscribe(hero => {
        if(!hero) return this.router.navigateByUrl('/');
        this.heroForm.reset(hero)
        return;
      })
}
  public heroForm = new FormGroup({
    id:new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable:true}),
    publisher: new FormControl<Publisher>( Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  })
  onSubmit():void{
    if(this.heroForm.invalid) return;
    if(this.currentHero.id){
      this.heroService.updateHero(this.currentHero)
      .subscribe(hero => {
        this.showSnackBar(`${hero.superhero} updated!`)
      })
      return;
    }
    this.heroService.createHero(this.currentHero)
      .subscribe( hero => {
        this.router.navigate(['/hero/edit',hero.id])
        this.showSnackBar(`${hero.superhero} created!`)
      })
  }
get currentHero():Hero{
  const hero = this.heroForm.value as Hero
  return hero;
}
onDeleteHero(){
if(!this.currentHero.id)  throw Error("hero id is required");
const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  data: this.heroForm.value
});
dialogRef.afterClosed()
  .pipe(
    filter((result:boolean)=>result),
    switchMap(()=>this.heroService.deleteHero(this.currentHero.id)),
    tap(res=> console.log(res)),
    filter((wsDeleted:boolean)=>wsDeleted)
  )
  .subscribe((result: any) => {
    this.router.navigate(['/result'])
    })
}
showSnackBar(message:string):void{
this.snackBar.open(message,'done',{
  duration:2500
})
}
}
