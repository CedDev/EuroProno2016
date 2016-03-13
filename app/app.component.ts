import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { TeamService, CalendarService}     from './team.service';
import { DashboardComponent } from './dashboard.component';
import { TeamsComponent } from './teams.component';
import { CalendarComponent } from './calendar.component';
import { TeamDetailComponent } from './team-detail.component';

@Component({
  selector: 'my-app',
  template: `
     <nav>
      <div class="nav-wrapper green darken-3">
        <a href="#" class="brand-logo right">{{title}}</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a [routerLink]="['Dashboard']"><i class="material-icons left">view_quilt</i> Dashboard</a></li>
        <li><a [routerLink]="['Teams']"><i class="material-icons left">subject</i> Teams</a></li>
        <li><a [routerLink]="['Calendar']"><i class="material-icons left">view_agenda</i> Calendar</a></li>
        </ul>
        </div>
      </nav>
    <router-outlet></router-outlet>
  `,
  //styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TeamService,
    CalendarService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
  path: '/detail/:id',
  name: 'TeamDetail',
  component: TeamDetailComponent
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsComponent
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarComponent
  }
])

export class AppComponent {
  title = "Coupe d'Europe 2016";
}