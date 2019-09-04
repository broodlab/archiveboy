import {createReducer, on} from "@ngrx/store";
import {FilesState} from "./files.state";
import {filesInDirectoryReadSuccess} from "./files.actions";

export const initialState: FilesState = {
    filesInDirectory: []
};

const onSelectedFiles = (state, action) => {
    return {
        filesInDirectory: action.payload
    };
};

export const filesReducer = createReducer(initialState, on(filesInDirectoryReadSuccess, onSelectedFiles));
