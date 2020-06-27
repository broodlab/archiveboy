import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SettingsComponent} from "./settings.component";

@NgModule({
    declarations: [SettingsComponent],
    imports: [BrowserModule, CommonModule],
})
export class SettingsModule {}
