import {ApplicationComponent} from "./application.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {DirectorySelectionEffects} from "./directory-selection.effects";
import {DirectorySelectionService} from "./directory-selection.service";
import {EffectsModule} from "@ngrx/effects";
import {FileMetadataModule} from "../containers/file-metadata/file-metadata.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgModule} from "@angular/core";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {applicationReducer} from "./application.reducer";

@NgModule({
    bootstrap: [ApplicationComponent],
    declarations: [ApplicationComponent],
    imports: [
        BrowserModule,
        CommonModule,
        EffectsModule.forRoot([DirectorySelectionEffects]),
        FileMetadataModule,
        FlexLayoutModule,
        StoreModule.forRoot({application: applicationReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
    ],
    providers: [DirectorySelectionService],
})
export class ApplicationModule {}
