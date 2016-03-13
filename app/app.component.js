System.register(['angular2/core', 'angular2/router', './team.service', './dashboard.component', './teams.component', './calendar.component', './team-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, team_service_1, dashboard_component_1, teams_component_1, calendar_component_1, team_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (teams_component_1_1) {
                teams_component_1 = teams_component_1_1;
            },
            function (calendar_component_1_1) {
                calendar_component_1 = calendar_component_1_1;
            },
            function (team_detail_component_1_1) {
                team_detail_component_1 = team_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Coupe d'Europe 2016";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <nav>\n      <div class=\"nav-wrapper green darken-3\">\n        <a href=\"#\" class=\"brand-logo right\">{{title}}</a>\n        <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n        <li><a [routerLink]=\"['Dashboard']\"><i class=\"material-icons left\">view_quilt</i> Dashboard</a></li>\n        <li><a [routerLink]=\"['Teams']\"><i class=\"material-icons left\">subject</i> Teams</a></li>\n        <li><a [routerLink]=\"['Calendar']\"><i class=\"material-icons left\">view_agenda</i> Calendar</a></li>\n        </ul>\n        </div>\n      </nav>\n    <router-outlet></router-outlet>\n  ",
                        //styleUrls:['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            team_service_1.TeamService,
                            team_service_1.CalendarService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'TeamDetail',
                            component: team_detail_component_1.TeamDetailComponent
                        },
                        {
                            path: '/teams',
                            name: 'Teams',
                            component: teams_component_1.TeamsComponent
                        },
                        {
                            path: '/calendar',
                            name: 'Calendar',
                            component: calendar_component_1.CalendarComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map