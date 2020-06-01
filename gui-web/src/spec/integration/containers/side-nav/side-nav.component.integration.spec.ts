import {TestBed, async} from "@angular/core/testing";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SideNavComponent} from "@archiveboy/gui-web/containers/side-nav/side-nav.component";

describe("'side-nav' component:", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [[BrowserModule, CommonModule, FlexModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTooltipModule]],
            declarations: [SideNavComponent],
        }).compileComponents();
    }));

    it("renders", () => {
        const fixture = TestBed.createComponent(SideNavComponent);
        const sideNavComponent = fixture.componentInstance;
        expect(sideNavComponent).toBeTruthy();
    });
});
