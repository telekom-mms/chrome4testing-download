import { Routes } from '@angular/router';
import {DownloadMilestoneComponent} from "./download-milestone/download-milestone.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/milestone'
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
