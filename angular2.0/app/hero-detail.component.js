System.register(["angular2/core", "./services/hero.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService) {
                    this.heroService = heroService;
                }
                HeroDetailComponent.prototype.ngOnInit = function () { };
                HeroDetailComponent.prototype.setHero = function (id) {
                    var _this = this;
                    this.heroService.getHeroById(id).subscribe(function (data) { return _this.hero = data; }, function (err) { return console.log(err); });
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: "hero-detail",
                        template: "\n        <p>Hero Detail</p>\n        <p>id:{{hero.id}}</p>\n        <p>name:{{hero.name}}</p>\n        <p>age:{{hero.age}}</p>\n        <p>describe:{{hero.describe}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map