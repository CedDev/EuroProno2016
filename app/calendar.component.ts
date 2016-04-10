import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Calendar } from './team';
import { CalendarService }  from './team.service';

@Component({
    selector: 'my-cal',
    templateUrl:'app/calendar.component.html'
})

export class CalendarComponent implements OnInit { 
	
	calendars : Calendar[];
	selectedCal: Calendar;

	constructor(
		private _router: Router,
		private _calService: CalendarService,
		) { }

	getCalendar(){

		this._calService.getCalendar().then(calendars => this.calendars = calendars);

	}
	


	getCode(team:string){
		this._calService.getCode(team).then(calendars => team);
	}

	ngOnInit() {
		this.getCalendar();

	}
}	