import {createReducer, on} from "@ngrx/store";
import {filesInDirectoryReadSuccess} from "./files.actions";

export const initialState = {
    filesInDirectory: []
};

const onSelectedFiles = (state, action) => {
    return {
        filesInDirectory: action.payload
    };
};

export const filesReducer = createReducer(initialState, on(filesInDirectoryReadSuccess, onSelectedFiles));
