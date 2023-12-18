import {NgModule} from "@angular/core";
import {AboutComponent} from "./about/about.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.modules";
import {MatListModule} from "@angular/material/list";
import {MilestoneComponent} from "./milestone/milestone.component";
import {DownloadMilestoneComponent} from "./dl-milestone/download-milestone.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DownloadLatestComponent} from "./dl-latest/download-latest.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        DownloadMilestoneComponent,
        DownloadLatestComponent,
        MilestoneComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatListModule,
        MatSelectModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,
        //     RouterOutlet,
        //     RouterLink,
        //     RouterLinkActive
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
