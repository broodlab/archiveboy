import {FileMetadataEntity} from "../entities";
import {IFileMetadata} from "@archiveboy/api";
import {getDbConnection} from "../db-connection";

export const storeFileMetadata = async (fileMetadata: IFileMetadata[]): Promise<void> => {
    try {
        await getDbConnection().manager.save(
            fileMetadata.map((fileMetadata) => {
                const fileMetadataEntity = new FileMetadataEntity();
                fileMetadataEntity.path = fileMetadata.path;
                return fileMetadataEntity;
            })
        );
    } catch (e) {
        console.log(e);
    }
};
