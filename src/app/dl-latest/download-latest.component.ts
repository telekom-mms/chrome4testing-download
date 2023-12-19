import { Component } from '@angular/core';
import {DataService} from "../services/data.service";
import {Milestone} from "../models/models";
import {MilestoneComponent} from "../milestone/milestone.component";

@Component({
  selector: 'app-dl-latest',
  templateUrl: './download-latest.component.html',
  styleUrl: './download-latest.component.scss'
})
export class DownloadLatestComponent {

    protected stableMilestone!: Milestone;
    protected betaMilestone!: Milestone;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getLatest().subscribe(elements => {
            // this.milestones = Array.from(elements.milestones.values())
            //     .sort((a, b) => a.milestone < b.milestone ? 1 : -1);
            // this.milestone = elements.milestones.get('Stable');

             this.stableMilestone = <Milestone>elements.channels.get('Stable');
             this.betaMilestone = <Milestone>elements.channels.get('Beta');
        });
    }
}
