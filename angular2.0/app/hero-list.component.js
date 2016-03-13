System.register(["angular2/core", "./services/hero.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(heroService) {
                    this.heroService = heroService;
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    this.setHeroes();
                };
                HeroListComponent.prototype.setHeroes = function () {
                    var _this = this;
                    this.heroService.getAllHeroes().subscribe(function (data) { return _this.heroes = data; }, function (err) { return console.log(err); });
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: "hero-list",
                        template: "\n        <p>Hero List</p>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"#hero of heroes\">name:{{hero.name}}</li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map