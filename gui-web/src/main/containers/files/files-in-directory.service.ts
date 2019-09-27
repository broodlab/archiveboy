import {IFile} from "@archiveboy/api/models";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {api} from "@archiveboy/api-client/client";
import {map} from "rxjs/operators";

@Injectable()
export class FilesInDirectoryService {
    provideFilesInDirectory(directoryPath): Observable<string[]> {
        return api.provideFilesInDirectory(directoryPath).pipe(map((files: IFile[]) => files.map(file => file.path)));
    }
}
