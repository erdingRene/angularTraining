import { Component, OnInit } from '@angular/core';
import {IHero} from './hero';
import { TestService } from './test.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[];
  selectedHero: IHero;

  constructor(private testService: TestService) { }

  getHeroes(): void {
      this.testService.getTestHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  getTestHeroes(): void {
    this.testService.getTestHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
