import { Component, OnInit } from '@angular/core';
import {IHero} from './hero';
import { HeroesService} from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[];
  selectedHero: IHero;
  constructor(private heroService: HeroesService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
