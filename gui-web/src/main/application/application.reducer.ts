import {createReducer, on} from "@ngrx/store";
import {directorySelectionFinalized, directorySelectionSucceeded, selectDirectory} from "../shared/actions";

export const initialState = {
    directorySelectionInProgress: false
};

const onSelectDirectory = state => ({
    directorySelectionInProgress: true
});

const onDirectorySelectionSucceeded = state => state;

const onDirectorySelectionFinalized = state => ({
    directorySelectionInProgress: false
});

export const applicationReducer = createReducer(
    initialState,
    on(selectDirectory, onSelectDirectory),
    on(directorySelectionSucceeded, onDirectorySelectionSucceeded),
    on(directorySelectionFinalized, onDirectorySelectionFinalized)
);
