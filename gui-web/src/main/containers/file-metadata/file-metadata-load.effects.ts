import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {fileMetadataLoad, fileMetadataLoadSuccess} from "./file-metadata.actions";
import {EMPTY} from "rxjs";
import {FileMetadataService} from "./file-metadata.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FileMetadataLoadEffects {
    fileMetadataLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fileMetadataLoad.type),
            mergeMap(() =>
                this.fileMetadataService.provideFileMetadata().pipe(
                    map((fileMetadata) => {
                        return {type: fileMetadataLoadSuccess.type, payload: fileMetadata};
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private fileMetadataService: FileMetadataService) {}
}
