import {Team, Calendar} from './team';
import {TEAMS} from './mock-teams';
import {CALENDARS} from './mock-calendar';
import {Injectable} from 'angular2/core';

@Injectable ()
export class TeamService {
	getTeams() {
		return Promise.resolve(TEAMS);
	}

	getTeamsSlowly() {
		return new Promise<Team[]>(resolve =>
			setTimeout(() => resolve(TEAMS), 2000) // 2 seconds
		);
	}

	getTeam(id: number) {
		return Promise.resolve(TEAMS).then(
			teams => teams.filter(team => team.id === id)[0]
		);
	}
}

export class CalendarService {
	getCalendar() {
		console.log('before load');
		return Promise.resolve(CALENDARS);
	}

	getCalendarSlowly() {
		return new Promise<Calendar[]>(resolve =>
			setTimeout(() => resolve(CALENDARS), 2000) // 2 seconds
		);
	}

	getCal(id: number) {
		return Promise.resolve(CALENDARS).then(
			calendar => calendar.filter(cal => cal.id === id)[0]
		);
	}
}