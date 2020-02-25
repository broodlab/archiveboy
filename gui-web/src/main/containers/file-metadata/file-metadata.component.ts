import {Component, OnInit} from "@angular/core";
import {Store, select} from "@ngrx/store";
import {FileMetadataState} from "./file-metadata.state";
import {Observable} from "rxjs";
import {fileMetadataLoad} from "./file-metadata.actions";
import {selectDirectory} from "../../shared/actions";

@Component({
    selector: "ab-file-metadata",
    styleUrls: ["./file-metadata.component.scss"],
    templateUrl: "./file-metadata.component.html"
})
export class FileMetadataComponent implements OnInit {
    fileMetadata$: Observable<string[]>;

    constructor(private store: Store<{fileMetadata: FileMetadataState}>) {
        this.fileMetadata$ = store.pipe(select(state => state.fileMetadata.fileMetadata));
    }

    ngOnInit() {
        this.store.dispatch(fileMetadataLoad());
    }

    selectFiles() {
        this.store.dispatch(selectDirectory());
    }
}
