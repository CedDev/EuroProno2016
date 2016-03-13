import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls:['app/dashboard.component.css'],
	inputs: ['team']
})

export class DashboardComponent implements OnInit { 
	teams: Team[] = [];

	constructor(
			private _router: Router,
			private _teamService: TeamService
			) { }

	ngOnInit() {
		this._teamService.getTeams().then(
			teams => this.teams = teams.filter(team => team.group == "A"))
	}

	getGroup(group){
		this._teamService.getTeams()
			.then(teams => this.teams = teams.filter(team => team.group == group))
	}
	gotoDetail(team: Team) {
		let link = ['TeamDetail', { id: team.id }];
		this._router.navigate(link);
	}
}