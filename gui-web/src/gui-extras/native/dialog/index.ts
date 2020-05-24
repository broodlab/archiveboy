import {Observable, fromEvent} from "rxjs";
import {first, map} from "rxjs/operators";
import {DialogApi} from "@archiveboy/gui-extras/api/dialog";
import {ipcRenderer} from "electron";

export const dialog: DialogApi = {
    selectDirectory(): Observable<string> {
        ipcRenderer.send("open-file-dialog");
        return fromEvent(ipcRenderer, "selected-directory")
            .pipe(first())
            .pipe(map(([, {filePaths}]) => filePaths[0]));
    },
};
