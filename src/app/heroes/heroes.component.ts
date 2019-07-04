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

  constructor(private heroService:HeroserviceService) { 

  }
  ngOnInit() {
    this.getHeroes();
  }
   getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
}

}