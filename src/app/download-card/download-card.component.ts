import {Component, Input} from '@angular/core';
import {DownloadContainer} from "../milestone/milestone.component";

@Component({
    selector: 'app-download-card',
    templateUrl: './download-card.component.html',
    styleUrl: './download-card.component.scss'
})
export class DownloadCardComponent {

    @Input() download!: DownloadContainer;

    constructor() {
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log(this.download);
    //     if (changes['download']) {
    //         this.app = this.download.app;
    //     }
    // }
}
