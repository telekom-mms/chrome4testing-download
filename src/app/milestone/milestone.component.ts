import {Component, Input, SimpleChanges} from '@angular/core';
import {DownloadUrl, Milestone} from "../models/models";

@Component({
    selector: 'app-milestone',
    templateUrl: './milestone.component.html',
    styleUrl: './milestone.component.scss'
})
export class MilestoneComponent {
    @Input() milestone!: Milestone;

    appDownloads: DownloadContainer[] = [];
    displayedColumns: string[] = ['app', 'downloads'];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['milestone']) {
            this.milestone?.downloads.forEach((k, v) => {
                this.appDownloads.push({
                    app: v,
                    downloads: k
                });
            });
            // console.log(this.milestone);
        }
    }

}

export interface DownloadContainer {
    app: string;
    downloads: DownloadUrl[];
}
