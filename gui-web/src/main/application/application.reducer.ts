import {createReducer, on} from "@ngrx/store";
import {selectDirectory, selectDirectorySuccess} from "./application.actions";

export const initialState = {
    selectDirectoryInProgress: false
};

const onSelectDirectory = state => {
    return {
        selectDirectoryInProgress: true
    };
};

const onSelectDirectorySuccess = state => {
    return {
        selectDirectoryInProgress: false
    };
};

export const applicationReducer = createReducer(
    initialState,
    on(selectDirectory, onSelectDirectory),
    on(selectDirectorySuccess, onSelectDirectorySuccess)
);
