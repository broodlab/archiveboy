import {ApplicationComponent} from "./application.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [ApplicationComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule {}
