import {Observable, fromEvent} from "rxjs";
import {OpenDialogReturnValue, ipcRenderer} from "electron";
import {first, map} from "rxjs/operators";
import {DialogApi} from "@archiveboy/gui-extras/api/dialog";

export const dialog: DialogApi = {
    selectDirectory(): Observable<string> {
        ipcRenderer.send("open-file-dialog");
        return fromEvent(ipcRenderer, "selected-directory")
            .pipe(first())
            .pipe(
                map((event) => {
                    const [, {filePaths}] = event as [unknown, OpenDialogReturnValue];
                    return filePaths[0];
                })
            );
    },
};
