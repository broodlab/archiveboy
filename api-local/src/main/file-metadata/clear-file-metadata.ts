import {FileMetadataEntity} from "../entities";
import {getDbConnection} from "../db-connection";

export const clearFileMetadata = async (): Promise<void> => {
    try {
        await getDbConnection().manager.clear(FileMetadataEntity);
    } catch (e) {
        console.log(e);
    }
};
