import {ApplicationComponent} from "./application.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {DirectorySelectionEffects} from "./directory-selection.effects";
import {DirectorySelectionService} from "./directory-selection.service";
import {EffectsModule} from "@ngrx/effects";
import {FileMetadataModule} from "../containers/file-metadata/file-metadata.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SettingsComponent} from "../containers/settings/settings.component";
import {SettingsModule} from "../containers/settings/settings.module";
import {SideNavModule} from "../containers/side-nav/side-nav.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {TrashComponent} from "../containers/trash/trash.component";
import {TrashModule} from "../containers/trash/trash.module";
import {TrayComponent} from "../containers/tray/tray.component";
import {TrayModule} from "../containers/tray/tray.module";
import {WorkbenchComponent} from "../containers/workbench/workbench.component";
import {WorkbenchModule} from "../containers/workbench/workbench.module";
import {applicationReducer} from "./application.reducer";

@NgModule({
    bootstrap: [ApplicationComponent],
    declarations: [ApplicationComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        EffectsModule.forRoot([DirectorySelectionEffects]),
        FileMetadataModule,
        FlexLayoutModule,
        RouterModule.forRoot([
            {path: "workbench", component: WorkbenchComponent},
            {path: "", redirectTo: "workbench", pathMatch: "full"},
            {path: "tray", component: TrayComponent},
            {path: "trash", component: TrashComponent},
            {path: "settings", component: SettingsComponent},
        ]),
        SideNavModule,
        StoreModule.forRoot({application: applicationReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        SettingsModule,
        TrashModule,
        TrayModule,
        WorkbenchModule,
    ],
    providers: [DirectorySelectionService],
})
export class ApplicationModule {}
