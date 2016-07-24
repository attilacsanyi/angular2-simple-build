import { AppComponent, APP_ROUTES } from './app.component';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';


bootstrap(AppComponent, [
    provideRouter(APP_ROUTES)
]);

