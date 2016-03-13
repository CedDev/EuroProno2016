import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
	selector: 'my-team-detail',
	templateUrl: 'app/team-detail.component.html',
	styleUrls: ['app/team-detail.component.css'],
	inputs: ['team']	
})

export class TeamDetailComponent implements OnInit{
	team: Team;
	constructor(
		private _teamService: TeamService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._teamService.getTeam(id)
			.then(team => this.team = team);
	}
	
	goBack() {
		window.history.back();
	}
}