import {ApplicationComponent} from "./application.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {FilesSelectionEffects} from "./files-selection.effects";
import {FilesSelectionService} from "./files-selection.service";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {applicationReducer} from "./application.reducer";

@NgModule({
    bootstrap: [ApplicationComponent],
    declarations: [ApplicationComponent],
    imports: [BrowserModule, CommonModule, EffectsModule.forRoot([FilesSelectionEffects]), StoreModule.forRoot({app: applicationReducer})],
    providers: [FilesSelectionService]
})
export class ApplicationModule {}
