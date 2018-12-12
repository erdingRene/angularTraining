import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IHero} from './hero';
import {HEROES} from './mock-heros';
import {MessageService} from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  getHeroes(): Observable<IHero[]> {
    this.messageService.add('HeroesService: fetched the heroes');
    return of (HEROES);
  }
  constructor(private messageService: MessageService) { }
}
