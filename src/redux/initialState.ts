import { AppState, MenuTextsState, ProjectState, ProjectTextsState } from "./appState";

export const menuInitialState: MenuTextsState = {
    projectText: 'New project ⇧⌘P',
    expandText: 'Expand all',
    collapseText: 'Collapse all',
};

export const projectsInitialState: ProjectTextsState = {
    doneText: 'DONE',
    baseWordsText: 'BASE WORDS',
    teamText: 'TEAM',
    keysText: 'KEYS',
    qaIssuesText: 'QA ISSUES',
    wordsToDoText: 'WORDS TO DO',
    unverifiedText: 'UNVERIFIED',
    addLanguageText: 'Add language',
};

export const projectInitialState: ProjectState = {
    id: 1,
    name: 'Roamer App (Android SDK test)',
    done: 30,
    baseWords: 160246,
    team: 26,
    keys: 1834,
    issues: 47514,
    icons: ['up', 'down', 'check', 'user', 'rate', 'camera', 'book'],
    badges: [
        {
            name: 'Roamer',
            type: 'orange',
        },
        {
            name: 'iOS',
            type: 'green',
        }
    ],
    translationSections: [{
        id: 1,
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 2,
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 3,
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 4,
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 5,
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 6,
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 7,
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 8,
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 9,
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 10,
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 11,
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 12,
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 13,
        country: 'mk',
        language: 'Macedonian',
        done: 67,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 14,
        country: 'mk',
        language: 'Macedonian',
        done: 67,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        id: 15,
        country: 'mk',
        language: 'Macedonian',
        done: 67,
        wordsToDo: 16246,
        unverified: 50000,
    }]
};

export const appInitialState: AppState = {
    expand: true,
    projects: [
        projectInitialState
    ],
    MenuTextsState: menuInitialState,
    projectTexts: projectsInitialState,
};

export const newProjectInitialState: ProjectState = {
    id: 0,
    name: 'Roamer App (Android SDK test)',
    done: 0,
    baseWords: 160246,
    team: 26,
    keys: 1834,
    issues: 47514,
    icons: ['up', 'down', 'check', 'user', 'rate', 'camera', 'book'],
    badges: [
        {
            name: 'Roamer',
            type: 'orange',
        },
        {
            name: 'iOS',
            type: 'green',
        }
    ],
    translationSections: [],
};