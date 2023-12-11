import {Injectable} from '@angular/core';
import {Result} from "../models/models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private URL_MILESTONES = 'https://googlechromelabs.github.io/chrome-for-testing/latest-versions-per-milestone-with-downloads.json';

    constructor(private http: HttpClient) {
    }

    getMilestones(): Observable<Result> {
        return this.http.get<Result>(this.URL_MILESTONES);
    }

    // getMilestones2(): Observable<Map<string, Milestone>> {
    //     return this.http
    //         .get<Map<string, Milestone>>(this.URL_MILESTONES)
    //         .pipe(map(data => data.get('milestones'));
    // }
}
