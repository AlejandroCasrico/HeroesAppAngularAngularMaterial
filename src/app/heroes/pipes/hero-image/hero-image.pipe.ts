import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../interfaces/heroe';

@Pipe({ name: 'HeroImage' })
export class HeroImagePipe implements PipeTransform {
  public transform(hero: Hero): string {
    if( !hero.id && !hero.alt_img){
      return 'assets/no-image.png'
    }
    if(hero.alt_img) return hero.alt_img;
    return `assets/heroes/${hero.id}.jpg`
  }
}
