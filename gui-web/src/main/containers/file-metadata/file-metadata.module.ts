import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {FileListModule} from "../../components/file-list/file-list.module";
import {FileMetadataComponent} from "./file-metadata.component";
import {FileMetadataListEffects} from "./file-metadata-list.effects";
import {FileMetadataLoadEffects} from "./file-metadata-load.effects";
import {FileMetadataService} from "./file-metadata.service";
import {MatButtonModule} from "@angular/material/button";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {fileMetadataReducer} from "./file-metadata.reducer";

@NgModule({
    declarations: [FileMetadataComponent],
    imports: [
        BrowserModule,
        CommonModule,
        EffectsModule.forFeature([FileMetadataListEffects, FileMetadataLoadEffects]),
        FileListModule,
        MatButtonModule,
        StoreModule.forFeature("fileMetadata", fileMetadataReducer),
    ],
    exports: [FileMetadataComponent],
    providers: [FileMetadataService],
})
export class FileMetadataModule {}
