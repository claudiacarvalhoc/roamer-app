import { AppState } from './appState';
const KEY = 'state';

export const loadState = (): AppState => {
    try {
        const serializedState = localStorage.getItem(KEY);
        return serializedState !== null ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.error(`Error loading state from local storage`, err);
        return undefined;
    }
};

export const saveState = (state: AppState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (err) {
        console.error(`Error saving state on local storage`, err);
    }
};