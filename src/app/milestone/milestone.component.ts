import {Component, Input, SimpleChanges} from '@angular/core';
import {DownloadUrl, Milestone} from "../models/models";

@Component({
    selector: 'app-milestone',
    templateUrl: './milestone.component.html',
    styleUrl: './milestone.component.scss'
})
export class MilestoneComponent {
    @Input() milestone!: Milestone;

    downloads: DownloadContainer[] = [];

    constructor() {
        if (this.milestone) {
            // this.selectedApps = Array.from(this.milestone.downloads.keys());
            console.log("now");
            this.milestone.downloads.forEach((k, v) => {
                // let container: DownloadContainer = {
                //     app: v,
                //     downloads: k
                // };

                this.downloads.push({
                    app: v,
                    downloads: k
                });
                console.log(this.downloads);
            });
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['milestone']) {
            this.milestone.downloads.forEach((k, v) => {
                this.downloads.push({
                    app: v,
                    downloads: k
                });
            });
        }
    }

}

export interface DownloadContainer {
    app: string;
    downloads: DownloadUrl[];
}
