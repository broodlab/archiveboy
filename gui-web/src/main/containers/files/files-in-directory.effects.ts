import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {FilesInDirectoryService} from "./files-in-directory.service";
import {Injectable} from "@angular/core";
import {filesInDirectoryReadSuccess} from "./files.actions";
import {selectDirectorySuccess} from "../../application/application.actions";

@Injectable()
export class FilesInDirectoryEffects {
    filesInDirectory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(selectDirectorySuccess.type),
            mergeMap((action: any) =>
                this.filesInDirectoryService.provideFilesInDirectory(action.payload).pipe(
                    map(filesInDirectory => {
                        return {type: filesInDirectoryReadSuccess.type, payload: filesInDirectory};
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private filesInDirectoryService: FilesInDirectoryService) {}
}
