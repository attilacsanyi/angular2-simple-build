import {provideRouter, RouterConfig} from '@angular/router';

// Components
import {CounterComponent} from './counter/counter.component';

const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: '**', redirectTo: 'counter', },
];

export const appRouterProviders = [
  provideRouter(APP_ROUTES)
];
