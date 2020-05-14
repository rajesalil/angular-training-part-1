import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = [];
  selectedHero : Hero;
  constructor(private heroService : HeroService) { }

  onSelectHero(hero){
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
  
  ngOnInit() {
    this.getHeroes();
  }

}