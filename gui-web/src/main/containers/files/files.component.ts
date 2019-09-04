import {Store, select} from "@ngrx/store";
import {Component} from "@angular/core";
import {FilesState} from "./files.state";
import {Observable} from "rxjs";
import {selectDirectory} from "../../shared/actions";

@Component({
    selector: "ab-files",
    styleUrls: ["./files.component.scss"],
    templateUrl: "./files.component.html"
})
export class FilesComponent {
    filesInDirectory$: Observable<string[]>;

    constructor(private store: Store<{files: FilesState}>) {
        this.filesInDirectory$ = store.pipe(select(state => state.files.filesInDirectory));
    }

    selectFiles() {
        this.store.dispatch(selectDirectory());
    }
}
