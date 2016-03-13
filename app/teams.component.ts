import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Team } from './team';
import { TeamDetailComponent } from './team-detail.component';
import { TeamService }  from './team.service';

@Component({
    selector: 'my-teams',
    templateUrl:'app/teams.component.html',
	//styleUrls: ['app/teams.component.css'],
	directives: [TeamDetailComponent]
})

export class TeamsComponent implements OnInit { 
	
	teams : Team[];
	selectedTeam: Team;

	constructor(
		private _router: Router,
		private _teamService: TeamService
		) { }

	getTeams(){
		this._teamService.getTeams().then(teams => this.teams = teams);
	}

	ngOnInit() {
		this.getTeams();
	}

	onSelect(team: Team) { this.selectedTeam = team; }

	gotoDetail() {
		this._router.navigate(['TeamDetail', { id: this.selectedTeam.id }]);
	}
}	