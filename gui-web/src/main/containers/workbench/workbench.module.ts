import {ArchivistsModule} from "../archivists/archivists.module";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FilesModule} from "../files/files.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgModule} from "@angular/core";
import {WorkbenchComponent} from "./workbench.component";

@NgModule({
    declarations: [WorkbenchComponent],
    imports: [ArchivistsModule, BrowserModule, CommonModule, FilesModule, FlexLayoutModule],
})
export class WorkbenchModule {}
