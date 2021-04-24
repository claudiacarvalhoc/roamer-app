import { Action } from 'redux';
import { ProjectProperties } from "../appState";
import { ADD_PROJECT, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";

export interface addProjectAction extends Action<string> {
    project: ProjectProperties;
}

export interface ExpandProjectsAction extends Action {
}

export interface CollapseProjectAction extends Action {

}

export const addProjectAction = (
    project: ProjectProperties
): addProjectAction => ({
    type: ADD_PROJECT,
    project,
});

export const expandProjectsAction = (): ExpandProjectsAction => ({
    type: EXPAND_PROJECTS,
});

export const collapseProjectAction = (): CollapseProjectAction => ({
    type: COLLAPSE_PROJECTS,
});

export type AppActions =
    | addProjectAction;