import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
// import {enableProdMode} from '@angular/core';

import {AppComponent} from './app.component';
import {appRouterProviders} from './app.routes';

// Enable PROD mode
// enableProdMode();

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
]);

