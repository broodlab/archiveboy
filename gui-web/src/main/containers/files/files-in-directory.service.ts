import {Observable, from} from "rxjs";
import {Injectable} from "@angular/core";
import {readdirSync} from "fs";

@Injectable()
export class FilesInDirectoryService {
    provideFilesInDirectory(directoryPath): Observable<string[]> {
        return from([readdirSync(directoryPath)]);
    }
}
