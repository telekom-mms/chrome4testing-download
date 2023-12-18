import { Component } from '@angular/core';
import {DataService} from "../services/data.service";
import {Milestone} from "../models/models";

@Component({
  selector: 'app-dl-latest',
  templateUrl: './download-latest.component.html',
  styleUrl: './download-latest.component.scss'
})
export class DownloadLatestComponent {

    milestone!: Milestone;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getMilestones().subscribe(elements => {
            // this.milestones = Array.from(elements.milestones.values())
            //     .sort((a, b) => a.milestone < b.milestone ? 1 : -1);
            console.log(elements);
        });
    }
}
