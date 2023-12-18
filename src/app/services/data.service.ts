import {Injectable} from '@angular/core';
import {DownloadUrl, Milestone, Result} from "../models/models";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private URL_MILESTONES = 'https://googlechromelabs.github.io/chrome-for-testing/latest-versions-per-milestone-with-downloads.json';

    constructor(private http: HttpClient) {
    }

    // getMilestones(): Observable<Result> {
    //     return this.http.get<Result>(this.URL_MILESTONES);
    // }

    getMilestones(): Observable<Result> {
        return this.http
            .get(this.URL_MILESTONES)
            .pipe(map((result: any) => {
                    // Automatic transformation from JSON to 'Result' does not work -> no real Maps
                    let milestones: Map<string, Milestone> = new Map(Object.entries(result.milestones));
                    let newMilestones  = new Map<string, Milestone>();
                    milestones.forEach((value, key) => {
                        let newDownloads = new Map<string, DownloadUrl[]>(Object.entries(value.downloads));
                        let newMilestone = value;
                        newMilestone.downloads = newDownloads;
                        newMilestones.set(key, newMilestone);
                    })
                    return {
                        timestamp: result.timestamp,
                        milestones: newMilestones
                    };
                })
            );
    }
}
