// import { Component, Input } from '@angular/core';

import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

    constructor(private hs: HeroService, private route: ActivatedRoute, private location: Location) {

    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.hs.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    @Input()
    hero: Hero;

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.hs.update(this.hero).then(()=>  this.goBack())

    }

}