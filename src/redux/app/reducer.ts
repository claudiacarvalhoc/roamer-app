// import { ActionTypes } from '../types';
import { Reducer, combineReducers } from 'redux';
import { AppActions } from './actions';
import { PROJECT_LOAD_SUCCESS, EXPAND_PROJECTS, COLLAPSE_PROJECTS } from "../types";
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
        case PROJECT_LOAD_SUCCESS:
            return {
                ...state,
                projects: action.projects,
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
