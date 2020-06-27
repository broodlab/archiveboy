import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FilesComponent} from "./files.component";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [FilesComponent],
    imports: [BrowserModule, CommonModule],
    exports: [FilesComponent],
})
export class FilesModule {}
