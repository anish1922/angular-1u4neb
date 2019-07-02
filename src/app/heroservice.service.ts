import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of} from 'rxjs';
import{MessageService} from './message.service';
@Injectable({ providedIn: 'root',})
export class HeroserviceService {
messageService;
  constructor(messageService :MessageService) {
this.messageService=messageService
   }
getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);
}
}