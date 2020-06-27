import {ChangeDetectorRef, Component} from "@angular/core";
import {Store, select} from "@ngrx/store";
import {ApplicationState} from "../shared/models/states";
import {pairwise} from "rxjs/operators";

@Component({
    selector: "a8y-application",
    styleUrls: ["./application.component.scss"],
    templateUrl: "./application.component.html",
})
export class ApplicationComponent {
    constructor(private store: Store<{application: ApplicationState}>, changeDetectionRef: ChangeDetectorRef) {
        store
            .pipe(select((state) => state.application.directorySelectionInProgress))
            .pipe(pairwise())
            .subscribe(([oldValue, currentValue]) => {
                if (oldValue === true && currentValue === false) {
                    setTimeout(() => {
                        changeDetectionRef.detectChanges();
                    });
                }
            });
    }
}
