import {IFileMetadata} from "../models";

export interface Api {
    init(): Promise<any>;
    destroy(): Promise<any>;
    listMetadataOfFilesInDirectory: (directoryPath: string) => Promise<IFileMetadata[]>;
    storeFileMetadata: (files: IFileMetadata[]) => Promise<any>;
    provideFileMetadata: () => Promise<IFileMetadata[]>;
    clearFileMetadata: () => Promise<any>;
}
