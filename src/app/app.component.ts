import {Component} from '@angular/core';
import {IconOptions, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
// import {fas} from '@fortawesome/free-solid-svg-icons';
// import {far} from '@fortawesome/free-regular-svg-icons';
// import {fab} from '@fortawesome/free-brands-svg-icons'
import {faApple, faLinux, faMicrosoft} from '@fortawesome/free-brands-svg-icons'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'g4t-download';

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private faLibrary: FaIconLibrary
    ) {
        const options: IconOptions = {viewBox: '0 0 128 128'};
        this.matIconRegistry.addSvgIcon(
            'chrome4test',
            this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'),
            options
        );
        // Adding all icon packs from Font awesome
        // Update: Added all icons exeeds maximum bundle budget
        // this.faLibrary.addIconPacks(fas, far, fab);
        this.faLibrary.addIcons(faLinux, faApple, faMicrosoft)
    }

}


