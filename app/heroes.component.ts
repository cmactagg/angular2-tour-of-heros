import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

import { OnInit } from '@angular/core';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css']

})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heros';
  selectedHero :Hero;
  heroes : Hero[];
  
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  
}
