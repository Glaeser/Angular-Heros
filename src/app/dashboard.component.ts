import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    constructor(private hs: HeroService) { }

    ngOnInit(): void {
        this.hs.getHeroes().then(helden => this.heroes = helden.slice(1,5));
    }


}