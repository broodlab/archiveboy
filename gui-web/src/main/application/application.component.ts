import {ChangeDetectorRef, Component} from "@angular/core";
import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {pairwise} from "rxjs/operators";
import {selectingFiles} from "./application.actions";

@Component({
    selector: "ab-root",
    styleUrls: ["./application.component.scss"],
    templateUrl: "./application.component.html"
})
export class ApplicationComponent {
    selectedFiles$: Observable<string[]>;

    private selectingFiles$: Observable<boolean>;

    constructor(private store: Store<{app: {selectingFiles: boolean; selectedFiles: string[]}}>, changeDetectionRef: ChangeDetectorRef) {
        this.selectingFiles$ = store.pipe(select(state => state.app.selectingFiles));
        this.selectedFiles$ = store.pipe(select(state => state.app.selectedFiles));

        this.selectingFiles$.pipe(pairwise()).subscribe(([oldValue, currentValue]) => {
            if (oldValue === true && currentValue === false) {
                setTimeout(() => changeDetectionRef.detectChanges());
            }
        });
    }

    selectFiles() {
        this.store.dispatch(selectingFiles());
    }
}
