import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroserviceService }  from '../heroservice.service';
import { Hero }         from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: '../hero-detail/hero-detail.component.html',
  styleUrls: ['../hero-detail/hero-detail.component.css']
})
export class HeroDetailComponent {
hero: Hero;
  constructor(
  private route: ActivatedRoute,
  private heroService: HeroserviceService,
  private location: Location
) {

}
ngOnInit(): void {
    this.getHero();
  }
 
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroe(id)
      .subscribe(hero => this.hero = hero);
  }
 
 goBack(): void {
  this.location.back();
}
}