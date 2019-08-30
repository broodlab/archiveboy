import {ApplicationComponent} from "./application.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {DirectorySelectionEffects} from "./directory-selection.effects";
import {DirectorySelectionService} from "./directory-selection.service";
import {EffectsModule} from "@ngrx/effects";
import {FilesModule} from "../containers/files/files.module";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {applicationReducer} from "./application.reducer";

@NgModule({
    bootstrap: [ApplicationComponent],
    declarations: [ApplicationComponent],
    imports: [
        BrowserModule,
        CommonModule,
        EffectsModule.forRoot([DirectorySelectionEffects]),
        FilesModule,
        StoreModule.forRoot({application: applicationReducer})
    ],
    providers: [DirectorySelectionService]
})
export class ApplicationModule {}
