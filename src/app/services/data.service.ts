import {Injectable} from '@angular/core';
import {DownloadUrl, Milestone, Result, ResultLatest} from "../models/models";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private URL_MILESTONES = 'https://googlechromelabs.github.io/chrome-for-testing/latest-versions-per-milestone-with-downloads.json';
    private URL_LAST_KNOWN = 'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json';

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
                    // console.log(milestones);
                    let newMilestones = new Map<string, Milestone>();
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

    getLatest(): Observable<ResultLatest> {
        return this.http
            .get(this.URL_LAST_KNOWN)
            .pipe(
                map((result: any) => {

                    let channels: Map<string, Milestone> = new Map(Object.entries(result.channels));
                    let newMilestones = new Map<string, Milestone>();
                    // console.log(milestones);
                    channels.forEach((value, key) => {
                        // console.log('value', value);
                        let newDownloads = new Map<string, DownloadUrl[]>(Object.entries(value.downloads));
                        let newMilestone = value;
                        // let newMilestone:Milestone = {
                        //     channel: value.channel,
                        //     revision: value.revision,
                        //     version: value.version,
                        //     milestone: '',
                        //     downloads: value.downloads
                        // }
                        // console.log('newMilestone', newMilestone);
                        newMilestone.downloads = newDownloads;
                        newMilestones.set(key, newMilestone);
                    });
                    // console.log('new', newMilestones);
                    return {
                        timestamp: result.timestamp,
                        channels: newMilestones
                    };
                    // console.log('Channel', channels.get('Stable'));
                    // return {
                    //     milestone: channels.get('Stable')!.milestone,
                    //     revision: channels.get('Stable')!.revision,
                    //     version: channels.get('Stable')!.version,
                    //     downloads: channels.get('Stable')!.downloads
                    // }
                })
            );
    }
}
