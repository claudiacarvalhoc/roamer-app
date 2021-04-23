import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface ProjectTextsProperties {
    doneText: string;
    baseWordsText: string;
    teamText: string;
    keysText: string;
    qaIssuesText: string;
}

export interface IconType {
    Icon: 'up' | 'down' | 'check' | 'user' | 'rate' | 'camera' | 'book';
}

export interface TranslationSectionsProperties {
    country: string;
    language: string;
    done: number;
    wordsToDo: number;
    unverified: number;
}

export interface ProjectProperties {
    name: string;
    done: number;
    baseWords: number;
    team: number;
    keys: number;
    issues: number;
    icons: IconType[];
    tags: string[];
    translationSections: TranslationSectionsProperties[];
}

export interface ProjectsProperties {
    texts: ProjectTextsProperties;
    projects: ProjectProperties[];
}

const initialState: ProjectsProperties = {
    texts: {
        doneText: 'DONE',
        baseWordsText: 'BASE WORDS',
        teamText: 'TEAM',
        keysText: 'KEYS',
        qaIssuesText: 'QA ISSUES',
    },
    projects: [],
};

export const projectReducer = createSlice({
    name: 'project',
    initialState,
    reducers: {

    },
});

// export const { expand, collapse, addProject } = projectReducer.actions;

export const selectTexts = (state: RootState) => state.project.texts;
export const selectProjects = (state: RootState) => state.project.projects;

export default projectReducer.reducer;
