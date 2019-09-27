import {IFile} from "@archiveboy/api/models";
import {Observable} from "rxjs";
import {provideFilesInDirectory} from "../files";

export interface Api {
    provideFilesInDirectory: (directoryPath: string) => Observable<IFile[]>;
}

export const api: Api = {
    provideFilesInDirectory
};
