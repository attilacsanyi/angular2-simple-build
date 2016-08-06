import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

import {CounterComponent} from './counter/counter.component';

// Providers
import {STORE_PROVIDERS} from './core/store';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    CounterComponent,
    StoreLogMonitorComponent,
  ],
  providers: [
    HTTP_PROVIDERS,
    STORE_PROVIDERS,
  ]
})
export class AppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello world!';
  }
}
