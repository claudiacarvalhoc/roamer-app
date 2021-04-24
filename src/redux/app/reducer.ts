import { AppActions } from './actions';
import { ADD_PROJECT, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";
import { AppState } from '../appState';
import { projectStub } from '../../stubs/project';

const appInitialState: AppState = {
    expand: true,
    projects: [
        projectStub
    ],
    menuTexts: {
        projectText: 'New project ⇧⌘P',
        expandText: 'Expand all',
        collapseText: 'Collapse all',
    },
    projectTexts: {
        doneText: 'DONE',
        baseWordsText: 'BASE WORDS',
        teamText: 'TEAM',
        keysText: 'KEYS',
        qaIssuesText: 'QA ISSUES',
        wordsToDoText: 'WORDS TO DO',
        unverifiedText: 'UNVERIFIED',
        addLanguageText: 'Add language',
    },
};

export const appReducer = (
    state: AppState = appInitialState,
    action: AppActions
): AppState => {
    switch (action.type) {
        case ADD_PROJECT:
            const id = state.projects.length;
            const project = {
                ...action.project,
                id,
                name: `${action.project.name} ${id}`,
            };
            const projects = state.projects.slice();
            projects.push(project);
            return {
                ...state,
                projects
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
