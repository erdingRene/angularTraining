import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class HeroesModule { }
