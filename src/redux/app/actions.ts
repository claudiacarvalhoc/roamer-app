import { Action } from 'redux';
import { ProjectProperties } from "../appState";
import { PROJECT_LOAD_SUCCESS, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";

export interface ProjectLoadSuccess extends Action<string> {
    projects: ProjectProperties[];
}

export interface ExpandProjectsAction extends Action {
}

export interface CollapseProjectAction extends Action {

}

export const projectsLoadSuccess = (
    projects: ProjectProperties[]
): ProjectLoadSuccess => ({
    type: PROJECT_LOAD_SUCCESS,
    projects,
});

export const expandProjectsAction = (): ExpandProjectsAction => ({
    type: EXPAND_PROJECTS,
});

export const collapseProjectAction = (): CollapseProjectAction => ({
    type: COLLAPSE_PROJECTS,
});


export type AppActions =
    | ProjectLoadSuccess;