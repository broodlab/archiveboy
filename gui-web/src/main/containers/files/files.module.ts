import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {FilesComponent} from "./files.component";
import {FilesInDirectoryEffects} from "./files-in-directory.effects";
import {FilesInDirectoryService} from "./files-in-directory.service";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {filesReducer} from "./files.reducer";

@NgModule({
    declarations: [FilesComponent],
    imports: [BrowserModule, CommonModule, EffectsModule.forFeature([FilesInDirectoryEffects]), StoreModule.forFeature("files", filesReducer)],
    exports: [FilesComponent],
    providers: [FilesInDirectoryService]
})
export class FilesModule {}
