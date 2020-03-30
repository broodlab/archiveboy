import {createReducer, on} from "@ngrx/store";
import {fileMetadataListSuccess, fileMetadataLoadSuccess} from "./file-metadata.actions";
import {FileMetadataState} from "./file-metadata.state";

export const initialState: FileMetadataState = {
    fileMetadata: [],
};

const onIncomingFileMetadata = (state, action) => {
    return {
        fileMetadata: action.payload,
    };
};

export const fileMetadataReducer = createReducer(
    initialState,
    on(fileMetadataListSuccess, onIncomingFileMetadata),
    on(fileMetadataLoadSuccess, onIncomingFileMetadata)
);
