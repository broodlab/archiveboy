import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {dialog} from "@archiveboy/gui-extras/dialog";

@Injectable()
export class DirectorySelectionService {
    selectDirectory(): Observable<string> {
        return dialog.selectDirectory();
    }
}
