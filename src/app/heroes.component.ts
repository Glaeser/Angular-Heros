import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from './Hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {

  }


  getHeroes(): void {

    this.heroService.getHeroes().then(helden => this.heroes = helden);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

