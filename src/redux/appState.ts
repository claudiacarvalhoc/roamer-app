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
    languagesText: LanguageState[];
}

export interface TranslationState {
    id: number;
    country: string;
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
    badges: BadgeState[];
    translationSections: TranslationState[];
}

export interface BadgeState {
    name: string;
    type: 'orange' | 'green';
}

export interface LanguageState {
    value: string;
    label: string;
}
