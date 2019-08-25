import {Observable, from} from "rxjs";
import {Injectable} from "@angular/core";
import {promises} from "fs";

@Injectable()
export class FilesInDirectoryService {
    provideFilesInDirectory(directoryPath): Observable<string[]> {
        return from(promises.readdir(directoryPath));
    }
}
