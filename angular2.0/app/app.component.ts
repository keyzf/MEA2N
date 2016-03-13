import { Component } from 'angular2/core';
import { RouteConfig,RouterOutlet} from 'angular2/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { HTTP_PROVIDERS } from "angular2/http";

@Component({
    selector: 'my-app',
    template: `
        <div class="btn-group" role="group">
            <button type="button" [routerLink]="HeroDetail" class="btn btn-default">hero detail</button>
            <button type="button" [routerLink]="Heroes" class="btn btn-default">hero list</button>
        </div>
        <router-outlet></router-outlet>
    `,
    providers:[HTTP_PROVIDERS],
    directives:[RouterOutlet]
})
@RouteConfig([
    {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
    {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])
export class AppComponent { }
