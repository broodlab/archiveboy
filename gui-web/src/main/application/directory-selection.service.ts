import {Observable, fromEvent} from "rxjs";
import {first, map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {ipcRenderer} from "electron";

@Injectable()
export class DirectorySelectionService {
    selectDirectory(): Observable<string> {
        ipcRenderer.send("open-file-dialog");

        return fromEvent(ipcRenderer, "selected-directory")
            .pipe(first())
            .pipe(map(([, {filePaths}]) => filePaths[0]));
    }
}
