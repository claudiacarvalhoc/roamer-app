import { AppState, MenuState, ProjectsProperties } from "./appState";

export const menuInitialState: MenuState = {
    texts: {
        projectText: 'New project ⇧⌘P',
        expandText: 'Expand all',
        collapseText: 'Collapse all',
    },
    expand: false,
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
};
