import {Actions, createEffect, ofType} from "@ngrx/effects";
import {EMPTY, from} from "rxjs";
import {catchError, concatMap, mergeMap} from "rxjs/operators";
import {directorySelectionFinalized, directorySelectionSucceeded} from "../../shared/actions";
import {FileMetadataService} from "./file-metadata.service";
import {Injectable} from "@angular/core";
import {fileMetadataListSuccess} from "./file-metadata.actions";

@Injectable()
export class FileMetadataListEffects {
    filesMetadataList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(directorySelectionSucceeded.type),
            mergeMap(({payload}) =>
                from(this.fileMetadataService.listMetadataOfFilesInDirectory(payload)).pipe(
                    concatMap(fileMetadata => {
                        return [{type: fileMetadataListSuccess.type, payload: fileMetadata}, {type: directorySelectionFinalized.type}];
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private fileMetadataService: FileMetadataService) {}
}
