import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {directorySelectionSucceeded, selectDirectory} from "./application.actions";
import {DirectorySelectionService} from "./directory-selection.service";
import {EMPTY} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class DirectorySelectionEffects {
    directorySelection$ = createEffect(() =>
        this.actions$.pipe(
            ofType(selectDirectory.type),
            mergeMap(() =>
                this.directorySelectionService.selectDirectory().pipe(
                    map(directoryPath => {
                        return {type: directorySelectionSucceeded.type, payload: directoryPath};
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private directorySelectionService: DirectorySelectionService) {}
}
