System.register(['angular2/core', 'angular2/router', './team-detail.component', './team.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, team_detail_component_1, team_service_1;
    var TeamsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (team_detail_component_1_1) {
                team_detail_component_1 = team_detail_component_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            }],
        execute: function() {
            TeamsComponent = (function () {
                function TeamsComponent(_router, _teamService) {
                    this._router = _router;
                    this._teamService = _teamService;
                }
                TeamsComponent.prototype.getTeams = function () {
                    var _this = this;
                    this._teamService.getTeams().then(function (teams) { return _this.teams = teams; });
                };
                TeamsComponent.prototype.ngOnInit = function () {
                    this.getTeams();
                };
                TeamsComponent.prototype.onSelect = function (team) { this.selectedTeam = team; };
                TeamsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['TeamDetail', { id: this.selectedTeam.id }]);
                };
                TeamsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-teams',
                        templateUrl: 'app/teams.component.html',
                        //styleUrls: ['app/teams.component.css'],
                        directives: [team_detail_component_1.TeamDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, team_service_1.TeamService])
                ], TeamsComponent);
                return TeamsComponent;
            })();
            exports_1("TeamsComponent", TeamsComponent);
        }
    }
});
//# sourceMappingURL=teams.component.js.map