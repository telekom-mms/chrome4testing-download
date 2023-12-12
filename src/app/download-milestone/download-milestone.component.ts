import {Component, OnInit, Output} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {App, Milestone} from "../models/models";
import {DataService} from "../services/data.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {DownloadCardComponent} from "../download-card/download-card.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-download-milestone',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatCardModule,
        DownloadCardComponent,
        NgIf,
        NgForOf
    ],
    templateUrl: './download-milestone.component.html',
    styleUrl: './download-milestone.component.scss',
    providers: [DataService]
})

export class DownloadMilestoneComponent implements OnInit {
    // displayedColumns: string[] = ['release', 'version', 'win32', 'win64'];

    milestones!: Milestone[];
    selectedMilestone: Milestone | undefined;
    selectedApps!: string[];
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
        if (this.selectedMilestone) {
            this.selectedApps = Array.from(this.selectedMilestone.downloads.keys())
        }
        console.log(this.selectedMilestone);
        // console.log(this.selectedApps);
        // this.selectedMilestoneDownloads = this.selectedMilestone?.downloads.;
        // dl?.forEach((v, k) => console.log(v));
        // console.log(this.selectedMilestone?.downloads.keys());
        // this.dataService.getMilestones2().subscribe(elements => {
        //     const map = new Map(Object.entries(elements));
        //    // console.log(Object.keys(elements));
        //     console.log(map.get("milestones"));
        // });
        // this.dataService.getMap();
    }

    protected readonly App = App;
    protected readonly Array = Array;
}




