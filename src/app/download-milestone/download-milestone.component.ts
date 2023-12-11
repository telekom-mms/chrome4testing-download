import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {Milestone} from "../models/models";
import {DataService} from "../services/data.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
    selector: 'app-download-milestone',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatCardModule
    ],
    templateUrl: './download-milestone.component.html',
    styleUrl: './download-milestone.component.scss',
    providers: [DataService]
})

export class DownloadMilestoneComponent implements OnInit {
    displayedColumns: string[] = ['release', 'version', 'win32', 'win64'];
    milestones!: Milestone[];

    updated!: string;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getMilestones().subscribe(elements => {
            this.milestones = Object.values(elements.milestones);
            this.updated = elements.timestamp;
        });
    }
}




