import { AppState, MenuTexts, ProjectProperties, ProjectTextsProperties } from "./appState";

export const menuInitialState: MenuTexts = {
    projectText: 'New project ⇧⌘P',
    expandText: 'Expand all',
    collapseText: 'Collapse all',
};

export const projectsInitialState: ProjectTextsProperties = {
    doneText: 'DONE',
    baseWordsText: 'BASE WORDS',
    teamText: 'TEAM',
    keysText: 'KEYS',
    qaIssuesText: 'QA ISSUES',
};


export const projectInitialState: ProjectProperties = {
    id: 1,
    name: 'Roamer App (Android SDK test)',
    done: 30,
    baseWords: 160246,
    team: 26,
    keys: 1834,
    issues: 47514,
    icons: [{
        Icon: 'up'
    }, {
        Icon: 'down'
    }, {
        Icon: 'check'
    }, {
        Icon: 'user'
    }, {
        Icon: 'rate'
    }, {
        Icon: 'camera'
    }, {
        Icon: 'book'
    }],
    tags: [
        'Roamer',
        'iOS',
    ],
    translationSections: [{
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'uk',
        language: 'English',
        done: 20,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'ru',
        language: 'Russian',
        done: 45,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'it',
        language: 'Italian',
        done: 83,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'mk',
        language: 'Macedonian',
        done: 67,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
        country: 'mk',
        language: 'Macedonian',
        done: 67,
        wordsToDo: 16246,
        unverified: 50000,
    }, {
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
        projectInitialState,
    ],
    menuTexts: menuInitialState,
    projectTexts: projectsInitialState,
};
