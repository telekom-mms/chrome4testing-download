import {Component} from '@angular/core';
import {IconOptions, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'g4t-download';

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        const options: IconOptions = {viewBox: '0 0 128 128'};
        this.matIconRegistry.addSvgIcon(
            'chrome4test',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'),
            options
        );
    }

}


