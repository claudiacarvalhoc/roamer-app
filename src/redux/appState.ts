import { DefaultRootState } from "react-redux";

export interface AppState extends DefaultRootState {
    expand: boolean;
    projects: ProjectProperties[];
    menuTexts: MenuTexts,
    projectTexts: ProjectTextsProperties,
}

export interface MenuTexts {
    projectText: string;
    expandText: string;
    collapseText: string;
}

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
    id: number;
    name: string;
    done: number;
    baseWords: number;
    team: number;
    keys: number;
    issues: number;
    icons: string[];
    badges: string[];
    translationSections: TranslationSectionsProperties[];
}
