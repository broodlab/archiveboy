import {createReducer, on} from "@ngrx/store";
import {selectedFiles, selectingFiles} from "./application.actions";

export const initialState = {
    selectingFiles: false,
    selectedFiles: []
};

const onSelectingFiles = state => {
    return {
        selectingFiles: true,
        selectedFiles: []
    };
};

const onSelectedFiles = (state, action) => {
    return {
        selectingFiles: false,
        selectedFiles: action.payload
    };
};

export const applicationReducer = createReducer(initialState, on(selectedFiles, onSelectedFiles), on(selectingFiles, onSelectingFiles));
