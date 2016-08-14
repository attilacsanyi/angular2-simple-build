import {RouterModule} from '@angular/router';

export const routing = RouterModule.forRoot([
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: '**', redirectTo: 'counter' },
]);
