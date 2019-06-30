import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; 
import { HeroserviceService } from '../heroservice.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 heroes;
 selectedHero:Hero;
  constructor(private heroService:HeroserviceService) { 

  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero:Hero)
   {
     this.selectedHero=hero;
   }
   getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

}