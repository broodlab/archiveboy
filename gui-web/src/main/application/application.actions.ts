import {createAction} from "@ngrx/store";

export const selectDirectory = createAction("[Application] Select Directory");
export const directorySelectionSucceeded = createAction("[Application] Directory Selection Succeeded");
export const directorySelectionFinalized = createAction("[Application] Directory Selection Finalized");
