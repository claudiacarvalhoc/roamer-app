// import { ActionTypes } from '../types';
import { Reducer, combineReducers } from 'redux';
import { AppActions } from './actions';
import { PROJECT_LOAD_SUCCESS } from "../types";
import { AppState } from '../appState';

const appInitialState: AppState = {
    expand: true,
    projects: [],
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
        default:
            return {
                ...state,
            };
    }
};
