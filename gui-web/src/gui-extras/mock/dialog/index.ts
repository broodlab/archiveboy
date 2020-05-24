import {Observable, from} from "rxjs";
import {DialogApi} from "@archiveboy/gui-extras/api/dialog";

export const dialog: DialogApi = {
    selectDirectory(): Observable<string> {
        return from("foo");
    },
};
