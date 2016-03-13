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
		private _calService: CalendarService
		) { }

	getCalendar(){
		this._calService.getCalendar().then(calendars => this.calendars = calendars);
		console.log(this.calendars);
	}

	ngOnInit() {
		this.getCalendar();
	}
}	