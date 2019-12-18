import {Observable, from} from "rxjs";
import {IFile} from "@archiveboy/api";
import {map} from "rxjs/operators";
import {promises} from "fs";

export const provideFilesInDirectory = (directoryPath: string): Observable<IFile[]> => {
    return from(promises.readdir(directoryPath)).pipe(map((filePaths: string[]) => filePaths.map(path => ({path}))));
};
