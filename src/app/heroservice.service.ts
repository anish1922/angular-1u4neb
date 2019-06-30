import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({ providedIn: 'root',})
export class HeroserviceService {

  constructor() { }
getHeroes(): Hero[] {
  return HEROES;
}
}