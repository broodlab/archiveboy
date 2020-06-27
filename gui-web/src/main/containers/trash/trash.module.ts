import {ArchivistsModule} from "../archivists/archivists.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FilesModule} from "../files/files.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgModule} from "@angular/core";
import {TrashComponent} from "./trash.component";

@NgModule({
    declarations: [TrashComponent],
    imports: [ArchivistsModule, BrowserModule, CommonModule, FilesModule, FlexLayoutModule],
})
export class TrashModule {}
