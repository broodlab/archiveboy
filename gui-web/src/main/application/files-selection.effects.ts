import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {selectedFiles, selectingFiles} from "./application.actions";
import {EMPTY} from "rxjs";
import {FilesSelectionService} from "./files-selection.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FilesSelectionEffects {
    selectedFiles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(selectingFiles.type),
            mergeMap(() =>
                this.filesSelectionService.selectFiles().pipe(
                    map(files => {
                        return {type: selectedFiles.type, payload: files};
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private filesSelectionService: FilesSelectionService) {}
}
