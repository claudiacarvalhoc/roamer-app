import { Action } from 'redux';
import { ProjectState } from "../appState";
import { ADD_PROJECT, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";

export interface AddProjectAction extends Action<string> {
    project: ProjectState;
}

export interface ExpandProjectsAction extends Action {
}

export interface CollapseProjectAction extends Action {

}

export const addProjectAction = (project: ProjectState): AddProjectAction => ({
    type: ADD_PROJECT,
    project,
});

export const expandProjectsAction = (): ExpandProjectsAction => ({
    type: EXPAND_PROJECTS,
});

export const collapseProjectAction = (): CollapseProjectAction => ({
    type: COLLAPSE_PROJECTS,
});

export type AppActions = AddProjectAction;