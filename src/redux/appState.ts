import { DefaultRootState } from "react-redux";

export interface AppState extends DefaultRootState {
    expand: boolean;
    projects: ProjectState[];
    MenuTextsState: MenuTextsState,
    projectTexts: ProjectTextsState,
}

export interface MenuTextsState {
    projectText: string;
    expandText: string;
    collapseText: string;
}

export interface ProjectTextsState {
    doneText: string;
    baseWordsText: string;
    teamText: string;
    keysText: string;
    qaIssuesText: string;
    wordsToDoText: string;
    unverifiedText: string;
    addLanguageText: string;
    modalTitleText: string;
    closeButtonText: string;
    addButtonText: string;
}

export interface TranslationState {
    id: number;
    country: 'uk' | 'it' | 'ru' | 'mk';
    language: string;
    done: number;
    wordsToDo: number;
    unverified: number;
}

export interface ProjectState {
    id: number;
    name: string;
    done: number;
    baseWords: number;
    team: number;
    keys: number;
    issues: number;
    icons: string[];
    badges: Badge[];
    translationSections: TranslationState[];
}

export interface Badge {
    name: string;
    type: 'orange' | 'green';
}