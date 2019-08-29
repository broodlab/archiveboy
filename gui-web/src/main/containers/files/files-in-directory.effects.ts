import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, mergeMap} from "rxjs/operators";
import {directorySelectionFinalized, directorySelectionSucceeded} from "../../application/application.actions";
import {EMPTY} from "rxjs";
import {FilesInDirectoryService} from "./files-in-directory.service";
import {Injectable} from "@angular/core";
import {filesInDirectoryReadSuccess} from "./files.actions";

@Injectable()
export class FilesInDirectoryEffects {
    filesInDirectory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(directorySelectionSucceeded.type),
            mergeMap((action: any) =>
                this.filesInDirectoryService.provideFilesInDirectory(action.payload).pipe(
                    concatMap(filesInDirectory => {
                        return [{type: filesInDirectoryReadSuccess.type, payload: filesInDirectory}, {type: directorySelectionFinalized.type}];
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private filesInDirectoryService: FilesInDirectoryService) {}
}
