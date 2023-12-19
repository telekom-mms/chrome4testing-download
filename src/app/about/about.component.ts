import { Component } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

    protected latestDownloadUrl!: string;
    protected milestoneDownloadUrl!: string;

    constructor(private dataService: DataService) {
        this.latestDownloadUrl = dataService.getLatestDownloadUrl();
        this.milestoneDownloadUrl = dataService.getMilestoneDownloadUrl();
    }

}
