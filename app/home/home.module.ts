import {NgModule} from '@angular/core';

// Modules

// Components
import {HomeComponent} from './home.component';

import {routing} from './home.routing';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule { }
