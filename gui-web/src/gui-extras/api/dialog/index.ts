import {Observable} from "rxjs";

export interface DialogApi {
    selectDirectory(): Observable<string>;
}
