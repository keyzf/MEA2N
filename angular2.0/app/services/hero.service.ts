import { Injectable } from "angular2/core";
import { Observable } from "rxjs/Observable";
import { Hero } from "./../class/hero.class";
import { Http,Response } from "angular2/http";

@Injectable()
export class HeroService{
    constructor(private http:Http){}

    private heroUrl = "/hero";

    addHeroes(hero:Hero){
        return this.http.put(this.heroUrl+'/add',JSON.stringify(hero));
    }

    getAllHeroes(){
        return this.http.get(this.heroUrl+'/all')
            .map(res=><Hero[]>res.json());
    }

    getHeroById(id:number){
        return this.http.get(this.heroUrl+'/'+id)
            .map(res=><Hero>res.json());
    }
}