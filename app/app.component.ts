import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter.component';

// Providers
import {STORE_PROVIDERS} from './core/states';

import {TabMenu, MenuItem} from 'primeng/primeng';

export const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    StoreLogMonitorComponent,
    TabMenu
  ],
  providers: [
    HTTP_PROVIDERS,
    STORE_PROVIDERS,
  ]
})
export class AppComponent implements OnInit {
  private items: MenuItem[];

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello world!';

    this.items = [
      { label: 'Home', icon: 'fa-home', routerLink: ['/home'] },
      { label: 'Counters', icon: 'fa-list-ol', routerLink: ['/counter'] },
    ];
  }
}
