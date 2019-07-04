import { Component, OnInit } from '@angular/core';
import {HeroserviceService} from'../heroservice.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes;
heroService;
  constructor(heroService:HeroserviceService) { 
    this.heroService=heroService;
  }

  ngOnInit() {

    this.getHeroes();
  }
getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5));
}
}