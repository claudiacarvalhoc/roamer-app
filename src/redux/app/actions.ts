import { Action } from 'redux';
import { ProjectState, TranslationState } from "../appState";
import { ADD_PROJECT, ADD_LANGUAGES, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";

export interface AddProjectAction extends Action<string> {
    project: ProjectState;
}

export interface AddLanguagesAction extends Action<string> {
    projectId: number;
    translationsSections: TranslationState[];
}

export interface ExpandProjectsAction extends Action {
}

export interface CollapseProjectAction extends Action {

}

export const addProjectAction = (project: ProjectState): AddProjectAction => ({
    type: ADD_PROJECT,
    project,
});

export const addLanguagesAction = (projectId: number, translationsSections: TranslationState[]): AddLanguagesAction => ({
    type: ADD_LANGUAGES,
    projectId,
    translationsSections,
});

export const expandProjectsAction = (): ExpandProjectsAction => ({
    type: EXPAND_PROJECTS,
});

export const collapseProjectAction = (): CollapseProjectAction => ({
    type: COLLAPSE_PROJECTS,
});

export type AppActions = AddProjectAction & AddLanguagesAction;