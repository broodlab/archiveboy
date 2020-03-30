import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FileListComponent} from "./file-list.component";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [FileListComponent],
    exports: [FileListComponent],
    imports: [BrowserModule, CommonModule],
})
export class FileListModule {}
