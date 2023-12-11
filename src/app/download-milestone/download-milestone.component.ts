import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {PeriodicElement} from "../models/models";
import {DataService} from "../services/data.service";
import {Observable, subscribeOn, Subscription} from "rxjs";

@Component({
  selector: 'app-download-milestone',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './download-milestone.component.html',
  styleUrl: './download-milestone.component.scss',
  providers: [DataService]
})

export class DownloadMilestoneComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!: PeriodicElement[]
  subscription!: Subscription;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getTableData().subscribe(elements => this.dataSource = elements);
  }
}




