import {ArchivistsComponent} from "./archivists.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [ArchivistsComponent],
    imports: [BrowserModule, CommonModule],
    exports: [ArchivistsComponent],
})
export class ArchivistsModule {}
