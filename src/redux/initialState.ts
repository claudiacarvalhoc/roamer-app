import { AppState, MenuTexts, ProjectsProperties } from "./appState";

export const menuInitialState: MenuTexts = {
    projectText: 'New project ⇧⌘P',
    expandText: 'Expand all',
    collapseText: 'Collapse all',
};

export const projectsInitialState: ProjectsProperties = {
    texts: {
        doneText: 'DONE',
        baseWordsText: 'BASE WORDS',
        teamText: 'TEAM',
        keysText: 'KEYS',
        qaIssuesText: 'QA ISSUES',
    },
    projects: [],
};

export const appInitialState: AppState = {
    expand: true,
    projects: [],
    menuTexts: menuInitialState,
};
