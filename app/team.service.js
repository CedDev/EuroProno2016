System.register(['./mock-teams', './mock-calendar', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_teams_1, mock_calendar_1, core_1;
    var TeamService, CalendarService;
    return {
        setters:[
            function (mock_teams_1_1) {
                mock_teams_1 = mock_teams_1_1;
            },
            function (mock_calendar_1_1) {
                mock_calendar_1 = mock_calendar_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TeamService = (function () {
                function TeamService() {
                }
                TeamService.prototype.getTeams = function () {
                    return Promise.resolve(mock_teams_1.TEAMS);
                };
                TeamService.prototype.getTeamsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_teams_1.TEAMS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                TeamService.prototype.getTeam = function (id) {
                    return Promise.resolve(mock_teams_1.TEAMS).then(function (teams) { return teams.filter(function (team) { return team.id === id; })[0]; });
                };
                TeamService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TeamService);
                return TeamService;
            })();
            exports_1("TeamService", TeamService);
            CalendarService = (function () {
                function CalendarService() {
                }
                CalendarService.prototype.getCalendar = function () {
                    console.log('before load');
                    return Promise.resolve(mock_calendar_1.CALENDARS);
                };
                CalendarService.prototype.getCalendarSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_calendar_1.CALENDARS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                CalendarService.prototype.getCal = function (id) {
                    return Promise.resolve(mock_calendar_1.CALENDARS).then(function (calendar) { return calendar.filter(function (cal) { return cal.id === id; })[0]; });
                };
                return CalendarService;
            })();
            exports_1("CalendarService", CalendarService);
        }
    }
});
//# sourceMappingURL=team.service.js.map