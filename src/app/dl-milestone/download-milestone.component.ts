import {Component, OnInit} from '@angular/core';
import {Milestone} from "../models/models";
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-dl-milestone',
    templateUrl: './download-milestone.component.html',
    styleUrl: './dl-milestone.component.scss',
    providers: [DataService]
})

export class DownloadMilestoneComponent implements OnInit {
    milestones!: Milestone[];
    selectedMilestone: Milestone | undefined;

    updated!: string;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getMilestones2().subscribe(elements => {
            this.milestones = Array.from(elements.milestones.values())
                .sort((a, b) => a.milestone < b.milestone ? 1 : -1);
            this.updated = elements.timestamp;
        });
    }

    showDownloads(version: any) {
        this.selectedMilestone = this.milestones
            .filter((value, index, array) => value.version === version)
            .shift();
    }
}




