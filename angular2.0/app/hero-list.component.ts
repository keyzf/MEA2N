import { Component,OnInit } from "angular2/core";
import { Hero } from "./class/hero.class";
import { HeroService } from "./services/hero.service";
import { Router } from "angular2/router";

@Component({
    selector:"hero-list",
    template:`
        <p>Hero List</p>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="#hero of heroes">name:{{hero.name}}</li>
        </ul>
    `
})
export class HeroListComponent implements OnInit{
    heroes:Hero[];
    constructor(private heroService:HeroService){}
    ngOnInit(){
        this.setHeroes();
    }
    setHeroes(){
        this.heroService.getAllHeroes().subscribe(
            data=>this.heroes=data,
            err=>console.log(err)
        );
    }
}