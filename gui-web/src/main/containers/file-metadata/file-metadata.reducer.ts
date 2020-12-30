import {Action, ActionType, createReducer, on} from "@ngrx/store";
import {fileMetadataListSuccess, fileMetadataLoadSuccess} from "./file-metadata.actions";
import {FileMetadataState} from "./file-metadata.state";

export const initialState: FileMetadataState = {
    fileMetadata: [],
};

const onIncomingFileMetadata = (state: FileMetadataState, action: Action) => {
    return {
        fileMetadata: (action as any).payload,
    };
};

export const fileMetadataReducer = createReducer(
    initialState,
    on(fileMetadataListSuccess, onIncomingFileMetadata),
    on(fileMetadataLoadSuccess, onIncomingFileMetadata)
);
