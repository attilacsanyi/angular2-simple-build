import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {BrowserModule} from '@angular/platform-browser';
import {CounterModule} from './counter/counter.module';
import {HomeModule} from './home/home.module';

// Components
import {AppComponent} from './app.component';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

// Providers
import {STORE_PROVIDERS} from './core/store';

import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        CounterModule,
        HomeModule,
        routing,
    ],
    declarations: [
        AppComponent,
        StoreLogMonitorComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        STORE_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
