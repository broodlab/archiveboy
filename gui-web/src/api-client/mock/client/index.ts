import {Api} from "@archiveboy/api";
import {IFileMetadata} from "../../../../../api/src/main/models";
import {of} from "rxjs";

export const api: Api = {
    init(): Promise<any> {
        return of(null).toPromise();
    },
    destroy(): Promise<any> {
        return of(null).toPromise();
    },
    listMetadataOfFilesInDirectory(directoryPath: string): Promise<IFileMetadata[]> {
        return of([]).toPromise();
    },
    storeFileMetadata(files: IFileMetadata[]): Promise<any> {
        return of(null).toPromise();
    },
    provideFileMetadata(): Promise<IFileMetadata[]> {
        return of([]).toPromise();
    },
    clearFileMetadata(): Promise<any> {
        return of(null).toPromise();
    },
};
