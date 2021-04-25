import { AppActions } from './actions';
import { ADD_PROJECT, ADD_LANGUAGES, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";
import { AppState } from '../appState';
import { appInitialState } from '../../redux/initialState';

export const appReducer = (
    state: AppState = appInitialState,
    action: AppActions
): AppState => {
    const projects = state.projects.slice();
    switch (action.type) {
        case ADD_PROJECT:
            const id = state.projects.length + 1;
            const project = {
                ...action.project,
                id,
                name: `${action.project.name} ${id}`,
            };
            projects.push(project);
            return {
                ...state,
                projects
            };
        case ADD_LANGUAGES:
            const index = projects.findIndex(project => project.id === action.projectId);
            projects[index].translationSections = action.translationsSections;
            return {
                ...state,
                projects,
            };
        case EXPAND_PROJECTS:
            return {
                ...state,
                expand: true,
            };
        case COLLAPSE_PROJECTS:
            return {
                ...state,
                expand: false,
            };
        default:
            return {
                ...state,
            };
    }
};
