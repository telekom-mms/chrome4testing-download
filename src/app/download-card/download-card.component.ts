import {Component, Input} from '@angular/core';
import {Milestone} from "../models/models";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

@Component({
    selector: 'app-download-card',
    standalone: true,
    imports: [
        MatCardModule,
        MatListModule
    ],
    templateUrl: './download-card.component.html',
    styleUrl: './download-card.component.scss'
})
export class DownloadCardComponent {

    @Input() app!: string;
    @Input() milestone!: Milestone;

    // @Input() downloadUrls!: DownloadUrl[];

    constructor() {
        console.log("milestone", this.milestone);
    }


}
