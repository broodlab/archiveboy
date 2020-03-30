import {FileMetadataEntity} from "../entities";
import {IFileMetadata} from "@archiveboy/api";
import {getDbConnection} from "../db-connection";

export const provideFileMetadata = async (): Promise<IFileMetadata[]> => {
    try {
        const fileMetadataEntities = await getDbConnection().manager.find(FileMetadataEntity);
        return fileMetadataEntities.map((fileMetadataEntity) => ({path: fileMetadataEntity.path}));
    } catch (e) {
        console.log(e);
    }
};
