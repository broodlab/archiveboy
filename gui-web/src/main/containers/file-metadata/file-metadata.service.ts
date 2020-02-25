import {Observable, from} from "rxjs";
import {IFileMetadata} from "@archiveboy/api";
import {Injectable} from "@angular/core";
import {api} from "@archiveboy/api-client/client";
import {map} from "rxjs/operators";

@Injectable()
export class FileMetadataService {
    async listMetadataOfFilesInDirectory(directoryPath): Promise<string[]> {
        await api.clearFileMetadata();
        const fileMetadata = await api.listMetadataOfFilesInDirectory(directoryPath);
        await api.storeFileMetadata(fileMetadata);
        return fileMetadata.map(fileMetadata => fileMetadata.path);
    }

    provideFileMetadata(): Observable<string[]> {
        return from(api.provideFileMetadata()).pipe(map((fileMetadata: IFileMetadata[]) => fileMetadata.map(fileMetadata => fileMetadata.path)));
    }
}
