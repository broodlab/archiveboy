import {ChangeDetectorRef, Component} from "@angular/core";
import {Store, select} from "@ngrx/store";
import {pairwise} from "rxjs/operators";

@Component({
    selector: "ab-root",
    styleUrls: ["./application.component.scss"],
    templateUrl: "./application.component.html"
})
export class ApplicationComponent {
    constructor(private store: Store<{application: {directorySelectionInProgress: boolean}}>, changeDetectionRef: ChangeDetectorRef) {
        store
            .pipe(select(state => state.application.directorySelectionInProgress))
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
