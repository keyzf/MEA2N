import { Component,OnInit } from "angular2/core";
import { Hero } from "./class/hero.class";
import { HeroService } from "./services/hero.service";

@Component({
    selector:"hero-detail",
    template:`
        <p>Hero Detail</p>
        <p>id:{{hero.id}}</p>
        <p>name:{{hero.name}}</p>
        <p>age:{{hero.age}}</p>
        <p>describe:{{hero.describe}}</p>
    `
})
export class HeroDetailComponent implements OnInit{
    hero:Hero;
    constructor(private heroService:HeroService){}
    ngOnInit(){}
    setHero(id:number){
        this.heroService.getHeroById(id).subscribe(
            data=>this.hero=data,
            err=>console.log(err)
        );
    }
}