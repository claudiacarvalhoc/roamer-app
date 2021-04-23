import { Action } from 'redux';
import { ProjectProperties } from "../appState";
import { PROJECT_LOAD_SUCCESS } from "../types";

export interface ProjectLoadSuccess extends Action<string> {
    projects: ProjectProperties[];
}

export const projectsLoadSuccess = (
    projects: ProjectProperties[]
): ProjectLoadSuccess => ({
    type: PROJECT_LOAD_SUCCESS,
    projects,
});


export type AppActions =
    | ProjectLoadSuccess;