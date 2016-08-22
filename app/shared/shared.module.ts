import {NgModule, ModuleWithProviders} from '@angular/core';

// Angular
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [
        // Angular
        CommonModule, RouterModule, FormsModule, HttpModule,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
