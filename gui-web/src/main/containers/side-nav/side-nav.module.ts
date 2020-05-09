import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SideNavComponent} from "./side-nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [SideNavComponent],
    imports: [BrowserModule, CommonModule, FlexModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTooltipModule],
    exports: [SideNavComponent],
})
export class SideNavModule {}
