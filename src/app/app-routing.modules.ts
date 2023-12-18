import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DownloadMilestoneComponent} from "./dl-milestone/download-milestone.component";
import {AboutComponent} from "./about/about.component";
import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {DownloadLatestComponent} from "./dl-latest/download-latest.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/latest'
    },
    {
        path: 'latest',
        component: DownloadLatestComponent
    },
    {
        path: 'milestone',
        component: DownloadMilestoneComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
