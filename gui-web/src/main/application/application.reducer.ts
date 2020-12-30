import {createReducer, on} from "@ngrx/store";
import {directorySelectionFinalized, directorySelectionSucceeded, selectDirectory} from "../shared/actions";
import {ApplicationState} from "../shared/models/states";

export const initialState: ApplicationState = {
    directorySelectionInProgress: false,
};

const onSelectDirectory = () => ({
    directorySelectionInProgress: true,
});

const onDirectorySelectionSucceeded = (state: ApplicationState) => state;

const onDirectorySelectionFinalized = () => ({
    directorySelectionInProgress: false,
});

export const applicationReducer = createReducer(
    initialState,
    on(selectDirectory, onSelectDirectory),
    on(directorySelectionSucceeded, onDirectorySelectionSucceeded),
    on(directorySelectionFinalized, onDirectorySelectionFinalized)
);
