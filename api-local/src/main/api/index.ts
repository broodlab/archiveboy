import {clearFileMetadata, listMetadataOfFilesInDirectory, provideFileMetadata, storeFileMetadata} from "../file-metadata";
import {closeDbConnection, initDbConnection} from "../db-connection";
import {Api} from "@archiveboy/api";

export const api: Api = {
    init: initDbConnection,
    destroy: closeDbConnection,
    listMetadataOfFilesInDirectory,
    storeFileMetadata,
    provideFileMetadata,
    clearFileMetadata,
};
