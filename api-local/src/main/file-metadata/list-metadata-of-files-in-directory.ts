import {IFileMetadata} from "@archiveboy/api";
import {promises} from "fs";

export const listMetadataOfFilesInDirectory = async (directoryPath: string): Promise<IFileMetadata[]> => {
    const filePaths = await promises.readdir(directoryPath);
    return filePaths.map((path) => ({path}));
};
