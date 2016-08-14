import {NgModule} from '@angular/core';

// Modules
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

// Components
import {CounterComponent} from './counter.component';

import {routing} from './counter.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    routing
  ],
  declarations: [
    CounterComponent
  ],
  providers: []
})
export class CounterModule { }
